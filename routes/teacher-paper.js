var express = require("express");
var router = express.Router();
var TeacherPaper = require("../controllers/teacher-paper.js");

router.get("/", TeacherPaper.getTeacherPaper);

router.post("/paper", TeacherPaper.addPaper);

router.post("/question", TeacherPaper.addQuestions);

module.exports = router;
