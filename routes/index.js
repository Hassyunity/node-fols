require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Middleware pour rendre 'path' et 'lang' accessibles dans toutes les vues
router.use((req, res, next) => {
  res.locals.path = req.path;
  res.locals.lang = req.query.lang || 'fr'; // par défaut 'fr'
  next();
});

// Pages principales
const pages = ['home', 'ruby', 'react', 'nodejs', 'ia', 'about', 'services', 'coming', 'vitacar'];

pages.forEach(page => {
  const routePath = page === 'home' ? '/' : `/${page}`;
  router.get(routePath, (req, res) => {
    res.render('index', {
      section: page,
      lang: res.locals.lang,
      messageStatus: null
    });
  });
});

// Page contact GET
router.get('/contact', (req, res) => {
  const messageStatus = req.query.message || null;
  res.render('index', {
    section: 'contact',
    messageStatus,
    lang: res.locals.lang
  });
});

// Envoi de message POST
router.post('/submit-contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const templatePath = path.join(__dirname, '../templates/mail_form.html');
  let htmlContent = fs.readFileSync(templatePath, 'utf-8');

  htmlContent = htmlContent
    .replace('{{name}}', name)
    .replace('{{email}}', email)
    .replace('{{message}}', message.replace(/\n/g, '<br>'));

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Message de ${name}`,
    replyTo: email,
    html: htmlContent,
    attachments: [
      {
        filename: 'ia.jpg',
        path: path.join(__dirname, '../public/images/icons/logo.png'),
        cid: 'logoIA',
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect('/contact?message=success&lang=' + res.locals.lang);
  } catch (error) {
    console.error(error);
    res.redirect('/contact?message=error&lang=' + res.locals.lang);
  }
});

// Route ping
router.get('/ping', (req, res) => {
  const token = req.query.token;
  if (token !== process.env.PING_TOKEN) return res.status(401).send('Unauthorized');
  res.status(200).send('pong');
});

module.exports = router;
