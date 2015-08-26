var express = require('express');
var models = require('../models');
var router = express.Router();
var SingleChoice = require('../controllers/single-choice.js');
var singlechoice = new SingleChoice();

router.get('/',singlechoice.getSingleChoice);
router.post("/",singlechoice.postSingleChoice);

module.exports = router;
