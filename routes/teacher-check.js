var express = require('express');
var router = express.Router();
var models = require('../models');

//该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/',function(req,res) {
  res.render('teacher-checkpage');
});

router.get('/check.html',function(req,res) {
    models.papers.findAll().then(function(data) {
      res.send(data);
    });
});

router.get('/page',function(req,res) {
  var temp = req.query.name;
  console.log(temp);
  res.render('page.hbs');
});
 module.exports = router;
