var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add-fill', {
    title: 'Express',
    str: []
  });
});

// router.post('/fillAnswers', function(req, res, next) {
//   var str = req.body.str;
//   console.log(req.body.str);
//   res.render('add-fill', {
//     title: 'Express',
//     str: str,
//   });
// });

module.exports = router;
