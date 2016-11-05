var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karo' });
});
router.get('/interior2', function(req, res, next) {
  res.render('seccion2', { title: 'Interior2' });
});
router.get('/interior3', function(req, res, next) {
  res.render('seccion3', { title: 'Interior3' });
});
router.get('/interior4', function(req, res, next) {
  res.render('seccion4', { title: 'Interior4' });
});
module.exports = router;
