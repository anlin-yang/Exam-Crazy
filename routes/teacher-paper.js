var express = require("express");
var router = express.Router();
var models = require('../models');
router.get("/", function(req, res) {
  res.render('teacher/paper');
});
router.post("/",function(req,res){
  var user = models.papers.create({
   paper_name:req.body.data
 });
});
module.exports = router;
