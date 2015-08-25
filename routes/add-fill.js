var express = require('express');
var router = express.Router();
var models = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add-fill', {
    title: 'Express',
  });
});

router.post('/fill', function(req, res) {
  var fill = req.body.fill;
  models.Question.create({
    typeId: 3,
    questionContent: fill.question,
    questionKey: fill.answers,
    questionPoint: fill.count
  }).then(function(data) {
    console.log(data.dataValues);
    if (data.dataValues.id > 0) {
      res.send({
        question:data.dataValues.id,
        status: 200
      });
    }
  });
});

module.exports = router;
