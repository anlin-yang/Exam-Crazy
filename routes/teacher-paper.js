var express = require("express");
var router = express.Router();
var models = require('../models');

router.get("/", function(req, res) {
  res.render('teacher/paper');
});

router.get("/single", function(req, res) {
  res.render('add-single');
});

router.get("/multiple", function(req, res) {
  res.render('add-multiple');
});

router.post("/", function(req, res) {
  var user = models.Paper.create({
    paper_name: req.body.paperName,
    subject: req.body.subject
  });
});
module.exports = router;
