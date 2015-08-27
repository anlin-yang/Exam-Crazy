var express = require('express');
var router = express.Router();
var PaperList = require('../controllers/paper-list.js');
router.get('/', PaperList.getPaperList);

module.exports = router;
