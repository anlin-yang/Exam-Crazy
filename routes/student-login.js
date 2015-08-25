var express = require('express');
var StudentLogin = require('../controllers/student-login.js');
var router = express.Router();

router.get('/', StudentLogin.displayPage);
router.post('/studentLogin', StudentLogin.identify);

module.exports = router;
