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

   models.papers.find({where:{paper_name:temp}}).then(function(data) {
     var str = data.dataValues.question_array;
     console.log('------------');
     console.log(str);
     console.log('------------');
     var arr = str.split(/\[|\]|,/);

   arr.map(function(val) {

       models.questions.find({where:{question_id:parseInt(val)}}).then(function(data) {
         result.push(data.dataValues);
       });

     console.log(result);
     res.render('page.hbs',{array:result});
   });
  });
});
 module.exports = router;
