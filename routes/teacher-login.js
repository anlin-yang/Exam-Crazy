var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('teacher-login');
});
router.post('/teacherAuthority', function(req, res) {
  var id = req.body.id;
  var password = req.body.password;
  models.TeacherInfo.findAll({
    where: {
      id: id,
      password: password
    }
  }).then(function(data) {
    if ((data.length === 0)) {
      res.send({
        status: 404,
        message: {},
        data: {}
      });
      console.log("404");
    } else {
      console.log("200");
      res.send({
        status: 200,
        message: {},
        data: {}
      });
    }
  });
});



module.exports = router;
