var express = require('express');
var router = express.Router();
var models = require('../models');

//该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/',function(req,res) {
  res.render('teacher-check-page');
});

router.get('/check.html',function(req,res) {
    models.papers.findAll().then(function(data) {
      res.send(data);
    });
});

router.get('/page',function(req,res) {
  var temp = req.query.name;
  var result = [];
  // models.papers.find({where:{paper_name:temp}}).then(function(data) {
  //  changQuestionArray(data);
  //  models.questions.find({where:{question_id:data.question_array}});
  //  result.push();
   res.render('page.hbs');
//  });
});
 module.exports = router;
