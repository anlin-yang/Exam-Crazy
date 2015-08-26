var express = require('express');
var models = require('../models');
var TeacherLogin = require('../controllers/teacher-login.js');

var router = express.Router();

router.get('/', TeacherLogin.getTeacherLogin);
router.post('/teacherAuthority', TeacherLogin.postTeacherAuthority);

module.exports = router;
