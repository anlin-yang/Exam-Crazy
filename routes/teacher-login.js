var express = require('express');
var models = require('../models');
var TeacherLogin = require('../controllers/teacher-login.js');

var router = express.Router();
var TeacherLogin = new TeacherLogin();


router.get('/', TeacherLogin.getTeacherLogin(req, res));
router.post('/teacherAuthority', TeacherLogin.postTeacherAuthority(req, res));


module.exports = router;
