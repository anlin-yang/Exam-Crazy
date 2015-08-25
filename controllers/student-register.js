var models = require('../models');
var status = require('../public/js/status.js');
// var utility = require('utility.js');
function Register() {

}
Register.prototype.getClasses = function(req, res) {
  var classes = [];
  models.Class.findAll().then(function(data) {
    for (var i = 0; i < data.length; i++) {
      classes.push(data[i].dataValues);
    }
    res.render('student-register', {
      title: 'Student Register',
      classes: classes
    });
  });

};

Register.prototype.verify = function(req, res) {
  var info = req.body.info;
  console.log(status.INS_ERROR);

  var student = models.Student;
  student.findAll({
    where: {
      id: info.id
    }
  }).then(function(data) {
    if (data.length === 0) {
      student.create({
        id: info.id,
        name: info.name,
        gender: info.gender,
        class: info.class,
        password: (info.password)
      }).then(function(data) {
        if(data.length === 0) {
          res.send({
            status:status.INS_ERROR
          });
        }else {
          res.send({
            status: status.DATA_SUCCESS,
            message: {}
          });
        }
      });

    } else {
      res.send({
        status: status.PARAM_ERROR ,
        message: {},
        data: {}
      });
    }
  });
};

module.exports = Register;
