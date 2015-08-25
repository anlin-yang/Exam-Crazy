var express = require('express');
var router = express.Router();
var AddFill = require('../controllers/add-fill.js');
var models = require('../models');
var addFill = new AddFill();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add-fill', {
    title: 'Express',
  });
});
router.post('/fill', addFill.add);

module.exports = router;
