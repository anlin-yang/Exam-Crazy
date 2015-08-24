var express = require('express');
var router = express.Router();
var Register = require('../controllers/student-register.js');

var register = new Register();
router.get('/',register.getClasses);
router.post('/register', register.verify);

module.exports = router;
