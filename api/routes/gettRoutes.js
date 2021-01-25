const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname ,'../../web/index.html'));
});

router.get('/coding', (req, res) => {
  res.sendFile(path.join(__dirname ,'../../web/routes/coding.html'));
});

router.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname ,'../../web/routes/music.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname ,'../../web/routes/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname ,'../../web/routes/contact.html'));
});

module.exports = router;