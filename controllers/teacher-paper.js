var models = require("../models");
var STATUS = require('../public/js/status.js');

var TeacherPaper = {};

TeacherPaper.getTeacherPaper = function(req, res) {
  res.render('teacher/paper');
};

TeacherPaper.getAddFill = function(req, res) {
  var fill = req.body.fill;
  models.Question.create({
    typeId: 3,
    questionContent: fill.question,
    questionKey: fill.answers,
    questionPoint: fill.count
  }).then(function(data) {
    console.log(data.dataValues.id);
    if (data.dataValues.id > 0) {

      res.send({
        question: data.dataValues.id,
        status: STATUS.DATA_SUCCESS,
      });
    } else {
      res.send({
        status: STATUS.QUR_ERROR,
      });
    }
  });
};

TeacherPaper.getAddSingle = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  models.Question.create({
    questionKey: answer,
    questionContent: question,
    questionPoint: 1,
    typeId: 1
  }).then(function(data) {
    if (data.length !== 0) {
      res.send({
        status: STATUS.DATA_SUCCESS,
        singleID: data.dataValues.id
      });
    }
  });
};

TeacherPaper.getAddMultiple = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  models.Question.create({
    questionKey: answer,
    questionContent: question,
    questionPoint: 1,
    typeId: 2
  }).then(function(data) {
    if (data.length !== 0) {
      res.send({
        status: STATUS.DATA_SUCCESS,
        multipleID: data.dataValues.id
      });
    }
  });
};

TeacherPaper.getJudge = function(req, res) {

};

TeacherPaper.getPaperInfo = function(req, res) {
  var user = models.Paper.create({
    paperName: req.body.paperName,
    subject: req.body.subject,
    score: req.body.score
  }).then(function(data) {
    if (data.length === 0) {
      res.send({
        staus: STATUS.QUR_ERROR,
        data: {}
      });
    } else {
      res.send({
        staus: STATUS.DATA_SUCCESS,
        data: data
      });
    }
  });
};

module.exports = TeacherPaper;
