var models = require('../models');
var utils = require('utility');
var status = require('../public/js/status.js');

var StudentLogin = {};

StudentLogin.displayPage = function(req, res) {
  res.render('student-login.hbs');
};

StudentLogin.identify = function(req, res) {
  models.Student.findAll({
    where: {
      id: req.body.studentId,
      password: utils.md5(req.body.password)
    }
  }).then(function(users) {
    responseIdentify(res, users);
  });
};

function responseIdentify(res, data){
  if (data.length !== 0) {
    res.send({
      status: status.DATA_SUCCESS,
      message: {},
      data: {}
    });
  } else {
    res.send({
      status: status.NOT_FOUND,
      message: {},
      data: {}
    });
  }
}
module.exports = StudentLogin;
