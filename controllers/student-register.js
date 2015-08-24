var models = require('../models');

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
        password: info.password
      });
      res.send({
        status: 200,
        message: {},
        data: {}
      });
    } else {
      res.send({
        status: 400,
        message: {},
        data: {}
      });
    }
  });
};

module.exports = Register;
