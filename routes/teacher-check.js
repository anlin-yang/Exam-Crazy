var express = require('express');
var models = require('../models');
var TeacherCheckPage = require('../controlers/teacher-check-page.js');

var router = express.Router();

var teacherCheck = new TeacherCheckPage();

router.get('/',teacherCheck.root);

router.get('/check',teacherCheck.check);

// router.get('page/confirmation', function(req, res) {
//   var temp = req.query.name;
//   console.log(temp);
//models.papers.findQuestionArray(temp).then(function(data) {
//console.log(data.dataValues.question_array);
//});
//   res.send('aaa');
// });

router.get('/page', teacherCheck.page);
module.exports = router;
