var express = require('express');
var router = express.Router();
var AddFill = require('../controllers/add-fill.js');
var models = require('../models');
var addFill = new AddFill();

router.get('/', addFill.fill);
router.post('/', addFill.addFill);

module.exports = router;
