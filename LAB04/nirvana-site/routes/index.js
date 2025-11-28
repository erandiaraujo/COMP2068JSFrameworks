var express = require('express');
var router = express.Router();

/* GET Home Page (Band Overview) */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nirvana - The Band' });
});

/* GET Kurt Cobain Page */
router.get('/kurt', function(req, res, next) {
  res.render('kurt', { title: 'Kurt Cobain' });
});

/* GET Krist Novoselic Page */
router.get('/krist', function(req, res, next) {
  res.render('krist', { title: 'Krist Novoselic' });
});

/* GET Dave Grohl Page */
router.get('/dave', function(req, res, next) {
  res.render('dave', { title: 'Dave Grohl' });
});

module.exports = router;