var express = require('express');
var models = require('../models');
var TeacherCheckPage = require('../controllers/teacher-check-page.js');

var router = express.Router();

var teacherCheck = new TeacherCheckPage();

router.get('/',teacherCheck.root);

router.get('/check',teacherCheck.check);

router.get('/page', teacherCheck.page);
module.exports = router;
