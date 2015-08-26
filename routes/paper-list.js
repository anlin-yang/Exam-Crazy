var express = require('express');
var router = express.Router();
var PaperList = require('../controllers/paper-list.js');
var paperList = new PaperList();
router.get('/', paperList.getPaperList);

module.exports = router;
