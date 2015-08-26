var express = require('express');
var models = require('../models');
var router = express.Router();
var multiplechoice = require('../controllers/multiple-choice.js');

router.get('/',multiplechoice.getMultipleChoice);
router.post("/",multiplechoice.postMultipleChoice);

module.exports = router;
