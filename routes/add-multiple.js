var express = require('express');
var models = require('../models');
var router = express.Router();
var questions = models.questions;
var AddMultiple = require('../controllers/add-multiple.js');
var addmultiple = new AddMultiple();

router.get('/',addmultiple.getAddMultiple);
router.post("/",addmultiple.postAddMultiple);

module.exports = router;
