var express = require('express');
var StudentAnswer = require('../controllers/student-answer.js');

var router = express.Router();

router.get('/',StudentAnswer.findPaper);

module.exports = router;
