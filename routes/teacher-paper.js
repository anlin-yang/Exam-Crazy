var express = require("express");
var router = express.Router();
var models = require('../models');
router.get("/", function(req, res) {
  console.log(req.query);
  var user = models.papers.create({
    paper_name:req.query.data
  });
  res.render('teacher/paper');
});
module.exports = router;
