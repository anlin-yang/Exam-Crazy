var models = require("../models");

function TeacherPaper() {

}

TeacherPaper.prototype.getTeacherPaper = function(req, res) {
  res.render('teacher/paper');
};

TeacherPaper.prototype.getAddFill = function(req, res) {

};

TeacherPaper.prototype.getAddSingle = function(req, res) {

};

TeacherPaper.prototype.getAddMultiple = function(req, res) {

};

TeacherPaper.prototype.getPaperInfo = function(req, res) {
  var user = models.Paper.create({
    paperName: req.body.paperName,
    subject: req.body.subject,
    score: req.body.score
  }).then(function(data) {

  });
};

module.exports = TeacherPaper;
