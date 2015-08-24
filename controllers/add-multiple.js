var models = require('../models');
var questions = models.questions;
var models = require('../models');

function AddMultiple() {

}

AddMultiple.prototype.getAddMultiple = function(req, res) {
  res.render('add-multiple.hbs');
};

AddMultiple.prototype.postAddMultiple = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  questions.create({
    question_key: answer,
    question_content: question,
    question_point: 1,
    type_id: 2
  }).then(function() {
    res.send("aaa");
  });
};

module.exports = AddMultiple;
