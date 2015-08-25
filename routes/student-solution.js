var express = require('express');
var router = express.Router();
var StudentSolution = require("../controllers/student-solution.js");

router.post('/', StudentSolution.getStudentSolution);

module.exports = router;
