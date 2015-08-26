var models = require('../models');
var status = require('../public/js/status.js');
var questions = models.Question;

var SingleChoice={};

SingleChoice.getSingleChoice = function(req, res) {
  res.render('single-choice.hbs');
};

SingleChoice.postSingleChoice = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  questions.create({
    questionKey: answer,
    questionContent: question,
    questionPoint: 1,
    typeId: 1
  }).then(function(data) {
    if (data.length !== 0) {
      res.send({
        status: status.DATA_SUCCESS,
        singleID: data.dataValues.id
      });
  }
});
};


module.exports = SingleChoice;
