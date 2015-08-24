var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('teacher-login');
});
router.post('/teacherLoginCheck', function(req, res) {
  console.log("password");
  var username = req.body.un;
  var password = req.body.pw;
  models.teacher_info.findAll({
    where: {
      teacher_id: username
    }
  }).then(function(data) {
    if ((data.length === 0) || (data[0].dataValues.password !== password)) {
      res.send({
        status: 404,
        message: {},
        data: {}
      });
      console.log("404");
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
