var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('layout-index');
});

module.exports = router;
