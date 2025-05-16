require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// ✅ Middleware pour rendre 'path' accessible dans toutes les vues
router.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

/* GET roadmap web page */
router.get('/roadmap/web', function (req, res) {
  res.render('roadmap/web', { title: 'AI Developer Journey' });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  const message = req.query.message || null;
  res.render('index', { title: 'Code Vibes', message });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET Project Details Pages */
router.get('/projects/babels', function (req, res) {
  res.render('partials/projects/babels', {
    title: 'Détail – Babel Goods'
  });
});

/* GET Hassistante Project Detail Page */
router.get('/projects/hassistante', function (req, res) {
  res.render('partials/projects/hassistante', {
    title: 'Détail – Hassistante'
  });
});

/* POST contact form */
router.post('/submit-contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Lire le template HTML
  const templatePath = path.join(__dirname, '../templates/mail_form.html');
  let htmlContent = fs.readFileSync(templatePath, 'utf-8');

  // Injecter les variables dynamiques
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
        path: path.join(__dirname, '../public/images/lg.png'),
        cid: 'logoIA'
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect('/?message=success');
  } catch (error) {
    console.error(error);
    res.redirect('/?message=error');
  }
});

module.exports = router;
