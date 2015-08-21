var express = require('express');
var models = require('../models');
var router = express.Router();
var answers = models.answers;
var answer = models.answered_papers;

router.get('/', function(req, res) {
  res.sendfile("./views/page.html");
});

router.get('/getform', function(req, res) {
  var array = [];
  for (var i = 0; i < req.query.data.length; i++) {
    var id = (req.query.data)[i].name;
    array.push(id);
    var obj = (req.query.data[i].value).join(",");
    var user = answers.create({
      question_id: id,
      types: req.query.data[i].type,
      answer_context: obj
    });
  }

  var objs = array.join(",");
  var users = answer.create({
    answers_array: objs
  });
});
module.exports = router;
