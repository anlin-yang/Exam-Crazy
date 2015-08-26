var express = require('express');
var models = require('../models');
var teacherCheckPage = require('../controllers/teacher-check-page.js');

var router = express.Router();

//var teacherCheck = new TeacherCheckPage();

router.get('/',teacherCheckPage.root);

router.get('/check',teacherCheckPage.check);

router.get('/page', teacherCheckPage.page);
module.exports = router;
