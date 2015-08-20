
var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
  res.sendfile("./views/page.html");
});
router.get('/getform', function(req, res) {
  console.log(req.query.data);
});
module.exports = router;
