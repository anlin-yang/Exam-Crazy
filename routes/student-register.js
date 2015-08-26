var express = require('express');
var router = express.Router();
var register = require('../controllers/student-register.js');

router.get('/',register.register);
router.post('/register', register.verify);

module.exports = router;
