var express = require('express');
var router = express.Router();
var models = require('../models');
var Register = require('../controlers/student-register.js');

var register = new Register();

router.get('/',register.getClasses);
router.post('/res', register.verify);

module.exports = router;
