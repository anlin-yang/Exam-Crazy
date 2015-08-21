var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'matrix',
  password : '0000',
  database : 'Exam_Crazy'
});

//connection.end()
connection.connect();

//该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});



router.get('/',function(req,res) {
  res.render('checkpage');
<<<<<<< Updated upstream
=======
  //res.send("hello");
>>>>>>> Stashed changes
});

router.get('/check.html',function(req,res) {
    connection.query('select * from papers', function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    });
});

// router.get('/page.html',function(req,res) {
//   var temp = req.query;
  //console.log(temp);
//});
//router.listen(3000);
 module.exports = router;
