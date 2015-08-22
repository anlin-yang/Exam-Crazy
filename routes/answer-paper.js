var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendfile('views/answer-page.html');
});
module.exports = router;
