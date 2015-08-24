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

router.get('/suretocheck',function(req,res) {
  var temp = req.query.name;
  var result = [];
  var a = [];

   models.papers.find({where:{paper_name:temp}}).then(function(data) {
     var str = data.dataValues.question_array;
     var arr = str.split(/\[|\]|,/);
     a.push({title:temp});
   arr.forEach(function(val) {
      if(val.length !== 0) {
       models.questions.find({where:{question_id:parseInt(val)}}).then(function(data) {
         var b = [];
         b = data.dataValues.question_content.split('-');

        models.types.find({where:{type_id:data.dataValues.type_id}}).then(function(data) {
          //a.push({type:data.dataValues.type});
          if(data.dataValues.type === '选择题') {
            a.push({"type":data.dataValues.type,"question_content":b[0],"answer_A":b[1],"answer_B":b[2],"answer_C":b[3],"answer_D":b[4]});
          } else {
            a.push({"type":data.dataValues.type,question_content:b[0]});
          }
          console.log(a);
        });
       });
      }
   });
   res.send(a);
  });

});

router.get('/page',function(req,res) {
  var temp = req.query.name;
  var result = [];
  var a = [];
  a.push({"title":temp});
  //  models.papers.find({where:{paper_name:temp}}).then(function(data) {
  //    var str = data.dataValues.question_array;
  //    var arr = str.split(/\[|\]|,/);
  //    a.push({title:temp});
  //  arr.forEach(function(val) {
  //     if(val.length !== 0) {
  //      models.questions.find({where:{question_id:parseInt(val)}}).then(function(data) {
  //        var b = [];
  //        b = data.dataValues.question_content.split('-');
   //
  //       models.types.find({where:{type_id:data.dataValues.type_id}}).then(function(data) {
  //         //a.push({type:data.dataValues.type});
  //         if(data.dataValues.type === '选择题') {
  //           a.push({"type":data.dataValues.type,"question_content":b[0],"answer_A":b[1],"answer_B":b[2],"answer_C":b[3],"answer_D":b[4]});
  //         } else {
  //           a.push({"type":data.dataValues.type,question_content:b[0]});
  //         }
  //         console.log(a);
  //       });
  //      });
  //     }
  //  });
   res.render('page.hbs',{array:a});
//  });


});
 module.exports = router;
