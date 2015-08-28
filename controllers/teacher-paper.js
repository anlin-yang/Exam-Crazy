var models = require("../models");
var STATUS = require('../public/js/status.js');

var TeacherPaper = {};
var array = [];

TeacherPaper.getTeacherPaper = function(req, res) {
  res.render('teacher/addQuestions');
};

TeacherPaper.addPaper = function(req, res) {
  models.Paper.create({
    paperName: req.body.paperName,
    subject: req.body.subject,
    score: req.body.score
  }).then(function(data) {
    if (data.options.isNewRecord === true) {
      res.send({
        status: STATUS.DATA_SUCCESS,
        messageg: {},
        data: data.dataValues.id
      });
    } else {
      res.send({
        status: STATUS.DATA_QUR_ERROR,
        messageg: {},
        data: {}
      });
    }
  });
};

TeacherPaper.addQuestions = function(req, res) {

  var paperId = req.body.paperId;
  var questionInfo = req.body.data;
  models.Question.create({
    typeId: parseInt(questionInfo.typeId),
    questionContent: questionInfo.questionContent,
    questionPoint: parseInt(questionInfo.questionPoint),
    questionkey: questionInfo.questionkey
  }).then(function(data) {
    return models.Option.create({
      questionId: data.dataValues.id,
      optionContent: questionInfo.optionContent
    });
  }).then(function(data) {
    return models.PaperQuestion.create({
      paperId: paperId,
      questionId: data.dataValues.id
    });
  });
};

module.exports = TeacherPaper;
