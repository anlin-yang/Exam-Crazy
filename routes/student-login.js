var express = require('express');
var models = require('../models');


var router = express.Router();

router.get('/', function(req, res) {
  res.render('student-login.hbs');
});

router.post('/login', function(req, res) {
  var username = req.body.un;
  var password = req.body.pw;

  models.students.findAll({
    where: {
      student_id: username
    }
  }).then(function(data) {
    if ((data.length === 0) || (data[0].dataValues.password !== password)) {
      res.send({
        status: 404,
        message: {},
        data: {}
      });
    } else {
      res.send({
        status: 200,
        message: {},
        data: {}
      });
    }
  });
});



module.exports = router;
