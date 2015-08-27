var models = require("../models");
var STATUS = require('../public/js/status.js');

var TeacherPaper = {};
var array = [];

TeacherPaper.getTeacherPaper = function(req, res) {
  res.render('teacher/addQuestions');
};

TeacherPaper.addQuestions = function(req, res) {
  var h=req.body;
  console.log(h);
};

module.exports = TeacherPaper;
