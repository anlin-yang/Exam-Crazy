var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
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
});

router.post('/res', function(req, res) {
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
    } else {
      res.send({
        status: 400,
        message: {},
        data: {}
      });
    }
  });
});

router.get('/', function(req, res) {
  res.render('login', {
    title: ''
  });
});

module.exports = router;
