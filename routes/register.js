var express = require('express');
var router = express.Router();
var Verifed = require('../node/register.js');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'EXAM' });
});

router.get('/ver',function(req,res) {
  var infor = req.query.infor;
  var result = Verifed.verify(infor);
  var information = "";
  if(result !== true) {
    res.send(result,information,res);
  }
  else {
    res.render('index', { title: 'EXAM' });
  }
});
router.get('/ret',function(req,res) {
  res.render('index',{title:'Success'});
});

module.exports = router;
