var models = require('../models');
var utils = require('utility');

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
      status: 200,
      message: {},
      data: {}
    });
  } else {
    res.send({
      status: 404,
      message: {},
      data: {}
    });
  }
}
module.exports = StudentLogin;
