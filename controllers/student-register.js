var models = require('../models');

function Register() {

}
Register.prototype.geta = function(req,res) {
  console.log(req.body.infor);
};

Register.prototype.getClasses = function(req, res) {
  console.log("aaaaaaaaaa");
  var classes = models.classes;
  var classs = [];
  classes.findAll().then(function(data) {
    for (var i = 0; i < data.length; i++) {
      classs.push(data[i].dataValues);
    }
  });
  res.render('student-register', {
    title: 'Student Register',
    classes: classs
  });
};

Register.prototype.verify = function(req, res) {
  var infor = req.body.infor;
  var students = models.students;
  students.findAll({
    where: {
      student_id: infor.id
    }
  }).then(function(data) {
    if (data.length === 0) {
      students.create({
        student_id: infor.id,
        name: infor.name,
        gender: infor.sex,
        class: infor.classes,
        password: infor.password
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
