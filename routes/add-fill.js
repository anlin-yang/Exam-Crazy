var express = require('express');
var router = express.Router();
var addFill = require('../controllers/add-fill.js');
router.get('/', addFill.fill);
router.post('/', addFill.addFill);

module.exports = router;
