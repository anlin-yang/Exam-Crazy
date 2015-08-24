var express = require('express');
var models = require('../models');
var router = express.Router();
var answer = models.Answer;
var answered_paper = models.AnsweredPaper;

// router.get('/getform', function(req, res) {
//   var array = [];
// for (var i = 0; i < req.query.data.length; i++) {
//   var id = (req.query.data)[i].name;
//   array.push(id);
//   var obj = (req.query.data[i].value).join(",");
//   var user = answers.bulk_create({
//     question_id: id,
//     types: req.query.data[i].type,
//     answer_context: obj
//   });
// }
//   var objs = array.join(",");
//   var users = answer.create({
//     answers_array: objs
//   });
// });

router.post('/', function(req, res) {
  var user = answer.bulkcreate(req.body.data);

});
module.exports = router;
