var models = require('../models');

function Student() {}

Student.prototype.displayPage = function(req, res) {
  res.render('student-login.hbs');
};

Student.prototype.identify = function(req, res) {
  models.students.findAll({
    where: {
      student_id: req.body.username,
      password: req.body.password
    }
  }).then(function(data) {
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
  });
};

module.exports = Student;
