var express = require("express");
var router = express.Router();
var TeacherPaper = require("../controllers/teacher-paper.js");

router.get("/", TeacherPaper.getTeacherPaper);

router.post("/fill", TeacherPaper.getAddFill);

router.post("/singleChoice", TeacherPaper.getAddSingle);

router.post("/multiple", TeacherPaper.getAddMultiple);

router.post("/judge", TeacherPaper.getJudge);

router.post("/",TeacherPaper.getPaperInfo);

module.exports = router;
