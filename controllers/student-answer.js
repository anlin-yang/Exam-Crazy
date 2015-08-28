var models = require('../models');
var _ = require('lodash');
var Sequelize = require('sequelize');

var StudentAnswer = {};

StudentAnswer.findPaper = function(req, res) {
  //models.Paper.findById(1)
  //  .then(function(data) {
  //    var paperName = data.dataValues.paperName;
  //  });

  models.PaperQuestion.findAll({
    where: {
      paperId: 1
    },
    include: [{
      model: models.Question,
      where: {
        questionId: Sequelize.col('id')
      }
    }]
  }).then(function (data) {
        console.log(data);
      })
}

//ON `PaperQuestion`.`id` = `Questions`.`id`
// AND `models.PaperQuestion`.`questionId` WHERE `PaperQuestion`.`paperId` = 1;


//FROM `PaperQuestions` AS `PaperQuestion` INNER JOIN `Questions` AS `Questions`
//ON `PaperQuestion`.`id` = `Questions`.`id`
//AND `models.PaperQuestion`.`questionId`
module.exports = StudentAnswer;
