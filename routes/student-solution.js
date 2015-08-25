var express = require('express');
var models = require('../models');
var router = express.Router();
var answer = models.Answer;
var answeredpaper = models.AnsweredPaper;

router.post('/', function(req, res) {
  var user = answer.bulkCreate(req.body.data);
});
module.exports = router;
