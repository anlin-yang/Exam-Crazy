var models = require('../models');
var status = require('../public/js/status.js');
var questions = models.Question;

var MultipleChoice = {};

MultipleChoice.getMultipleChoice = function(req, res) {
  res.render('multiple-choice.hbs');
};

MultipleChoice.postMultipleChoice = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  questions.create({
    questionKey: answer,
    questionContent: question,
    questionPoint: 1,
    typeId: 2
  }).then(function(data) {
    if (data.length !== 0) {
      res.send({
        status: status.DATA_SUCCESS,
        multipleID: data.dataValues.id
      });
    }
  });
};

module.exports = MultipleChoice;
