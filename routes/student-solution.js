var express = require('express');
var models = require('../models');
var router = express.Router();
var answer = models.Answer;

router.post('/', StudentSolution.getStudentSolution);

module.exports = router;
