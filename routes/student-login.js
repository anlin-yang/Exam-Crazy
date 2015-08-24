var express = require('express');
var models = require('../models');
var Student = require('../controlers/student-login.js');

var router = express.Router();
var student = new Student();

router.get('/', student.displayPage);

router.post('/studentLogin', student.identify);

module.exports = router;
