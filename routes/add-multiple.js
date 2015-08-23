var express = require('express');
var models = require('../models');
var router = express.Router();
var questions = models.questions;

router.get('/',function(req , res){
  res.render('add-multiple.hbs');
});

router.post("/", function(req, res){
  var question = req.body.question_information;
  var answer = req.body.question_answer;

  questions.create({
    question_key : answer,
    question_content :question,
    question_point : 1,
    type_id : 2
  });
  res.send("aaa");
});

module.exports = router;
