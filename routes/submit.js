var express = require('express');
var models = require('../models');
var router = express.Router();
var answers = models.answers;

router.get('/', function(req, res) {
  res.sendfile("./views/page.html");
});
router.get('/getform', function(req, res) {
  for (var i = 0; i < req.query.data.length; i++) {
    var id = (req.query.data)[i].name;
    var array = [];
    var obj = (req.query.data[i].value).join(",");
    var user = answers.create({
      question_id: id,
      types: req.query.data[i].type,
      answer_context: obj
    }).done(function() {

    });
  }
});
module.exports = router;
