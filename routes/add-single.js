var express = require('express');
var models = require('../models');
var router = express.Router();
var questions = models.questions;
var AddSingle = require('../controllers/add-single.js');
var addsingle = new AddSingle();

router.get('/',addsingle.getAddSingle);
router.post("/",addsingle.postAddSingle);

module.exports = router;
