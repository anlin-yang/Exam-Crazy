var express = require('express');
var models = require('../models');
var router = express.Router();
var singlechoice = require('../controllers/single-choice.js');

router.get('/',singlechoice.getSingleChoice);
router.post("/",singlechoice.postSingleChoice);

module.exports = router;
