var status = require('../public/js/status.js');
var models = require('../models');
var TeacherInfo = models.TeacherInfo;

TeacherLogin = {};

TeacherLogin.getTeacherLogin = function(req, res) {
  res.render('teacher-login');
};

TeacherLogin.postTeacherAuthority = function(req, res) {
  TeacherInfo.authentication(req.body.teacherId, req.body.password).then(function(data) {
    if (data) {
      res.cookie('teacherId', req.body.teacherId);
      res.send({
        status: status.DATA_SUCCESS,
        message: {},
        data: data.dataValues
      });
    } else {
      res.send({
        status: status.NOT_FOUND,
        message: "data is not found.",
        data: {}
      });
    }
  });
};

module.exports = TeacherLogin;
