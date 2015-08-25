var express = require('express');
var router = express.Router();
var models = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add-fill', {
    title: 'Express',
  });
});

router.post('/fill', function(req, res, next) {
  var fill = req.body.fill;
  models.Question.create({
    id:1,
    typeId: 3,
    questionContent: fill.question,
    questionKey:fill.answers[0],
    questionPoint:1
  });
});

module.exports = router;
