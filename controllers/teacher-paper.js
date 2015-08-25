var models = require("../models");

var TeacherPaper = {};

TeacherPaper.getTeacherPaper = function(req, res) {
  res.render('teacher/paper');
};

TeacherPaper.getAddFill = function(req, res) {

};

TeacherPaper.getAddSingle = function(req, res) {

};

TeacherPaper.getAddMultiple = function(req, res) {

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
        status: status.QUR_ERROR,
        data: {}
      });
    } else {
      res.send({
        status: status.DATA_SUCCESS,
        data: data
      });
    }
  });
};

module.exports = TeacherPaper;
