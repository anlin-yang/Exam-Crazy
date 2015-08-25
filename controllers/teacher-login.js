var status = require('../config/status.json');
var models = require('../models');
var TeacherInfo = models.TeacherInfo;


function TeacherLogin() {}

TeacherLogin.prototype.getTeacherLogin = function(req, res) {
  res.render('teacher-login');
};

TeacherLogin.prototype.postTeacherAuthority = function(req, res) {
  TeacherInfo.authentication(req.body.id, req.body.password).then(function(data) {
    console.log(data);
    if (data.length === 0) {
      res.send({
        status: status.NOT_FOUND,
        message: {},
        data: {}
      });
    } else {
      res.send({
        status: status.DATA_SUCCESS,
        message: {},
        data: {}
      });
    }
  });
};

module.exports = TeacherLogin;
