var models = require('../models');
var questions = models.questions;
var models = require('../models');

function AddSingle() {

}

AddSingle.prototype.getAddSingle = function(req, res) {
  res.render('add-single.hbs');
};

AddSingle.prototype.postAddSingle = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  questions.create({
    question_key: answer,
    question_content: question,
    question_point: 1,
    type_id: 1
  }).then(function() {
    res.send("aaa");
  });
};

module.exports = AddSingle;
