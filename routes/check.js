var express = require('express');
var router = express.Router();
var models = require('../models');

//var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'matrix',
//   password : '0000',
//   database : 'Exam_Crazy'
// });

//connection.end()
// connection.connect();

//该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});



router.get('/',function(req,res) {
  res.render('checkpage');
});

router.get('/check.html',function(req,res) {
    // connection.query('select * from papers', function(err, rows, fields) {
    //   if (err) throw err;
    models.papers.findAll().then(function(data) {
    //  console.log(data);
      res.send(data);
    });
    //});
});

router.get('/page',function(req,res) {
  var temp = req.query.name;
  console.log(temp);
  res.render('page.hbs');
});
 module.exports = router;
