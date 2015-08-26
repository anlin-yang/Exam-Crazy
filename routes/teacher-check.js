var express = require('express');
var models = require('../models');
var teacherCheckPage = require('../controllers/teacher-check-page.js');

var router = express.Router();

//var teacherCheck = new TeacherCheckPage();

router.get('/',teacherCheckPage.renderRoot);

router.get('/check',teacherCheckPage.checkPage);

router.get('/page', teacherCheckPage.renderPage);
module.exports = router;
