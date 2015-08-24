var express = require('express');
var router = express.Router();
var models = require('../models');

var subject = '语文';
var paperContent;


router.get('/', function(req, res) {
  res.render('student-answer.hbs');
});

router.get('/findPaper',function(req,res) {
  findPaper();
});

function findPaper(paper_content) {
  models.papers.findAll({
    where: {
      subject: subject
    }
  }).then(function(data) {
    if(data.length === 0) {
      console.log("Don't have this paper in the testLibrary!");
    } else {
      var paperContents = [];
      paperContent = data[0].dataValues.question_array;
      var contents = paperContent.split(/\[|\]|,/);
      contents.filter(function(content) {
        if(content.length !== 0) {
          return content;
        }
      }).forEach(function(question) {
        models.questions.findAll({
          where: {
            question_id: question
          }
        }).then(function(data) {
          if(data.length === 0) {
            console.log("this question don't exist!");
          } else {
            var contentObj = {}; 
             //contentObj.questionId = data[0].dataValues.question_id;
             contentObj.typeId = data[0].dataValues.type_id;
             contentObj.questionContent = data[0].dataValues.question_content.split('-');
            //  paperContents.push(contentObj);
            // console.log(paperContents);
            models.types.findAll({
              where: {
                type_id: contentObj.typeId
              }
            }).then(function(data) {
              if(data.length === 0) {
                console.log("Don't have this type!");
              } else {
                contentObj.type = data[0].dataValues.type;
                console.log(contentObj);
              }
            })
          }
        })
      });
      
    }
  });
  return paperContent;
}


module.exports = router;
