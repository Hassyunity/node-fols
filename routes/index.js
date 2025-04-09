require('dotenv').config();
var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  const message = req.query.message || null; // 👈 Définit message même s’il est absent
  res.render('index', { title: 'Express', message });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
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

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message de ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect('/?message=success');
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Erreur lors de l\'envoi du message.');
  }
});

module.exports = router;
