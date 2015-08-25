var models = require("../models");

function TeacherPaper() {

}

TeacherPaper.prototype.getTeacherPaper = function(req, res) {
  res.render('teacher/paper');
};

TeacherPaper.prototype.getAddFill = function(req, res) {
  var fill = req.body.fill;
  models.Question.create({
    typeId: 3,
    questionContent: fill.question,
    questionKey: fill.answers,
    questionPoint: fill.count
  }).then(function(data) {
    if (data.dataValues.id > 0) {
      res.send({
        question: data.dataValues.id,
        status: 200
      });
    } else {
      res.send({
        status: 501
      });
    }
  });
};

TeacherPaper.prototype.getAddSingle = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  questions.create({
    questionKey: answer,
    questionContent: question,
    questionPoint: 1,
    typeId: 1
  }).then(function() {
    res.send("aaa");
  });
};

TeacherPaper.prototype.getAddMultiple = function(req, res) {
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

TeacherPaper.prototype.getPaperInfo = function(req, res) {
  var user = models.Paper.create({
    paperName: req.body.paperName,
    subject: req.body.subject,
    score: req.body.score
  });
};

module.exports = TeacherPaper;
