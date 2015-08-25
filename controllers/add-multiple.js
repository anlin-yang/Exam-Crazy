var models = require('../models');
var questions = models.Question;

function AddMultiple() {

}

AddMultiple.prototype.getAddMultiple = function(req, res) {
  res.render('add-multiple.hbs');
};

AddMultiple.prototype.postAddMultiple = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  questions.create({
    questionKey: answer,
    questionContent: question,
    questionPoint: 1,
    typeId: 2
  }).then(function() {
    res.send("aaa");
  });
};

module.exports = AddMultiple;
