var models = require('../models');
var status = require('../public/js/status.js');
exports.fill = function(req,res) {
    res.render('add-fill');
};

exports.addFill = function(req, res) {

  var fill = req.body.fill;
  models.Question.create({
    typeId: 3,
    questionContent: fill.question,
    questionKey: fill.answers,
    questionPoint: fill.point
  }).then(function(data) {
    if (data.dataValues.id > 0) {
      res.send({
        questionId: data.dataValues.id,
        status: status.DATA_SUCCESS
      });
    } else {
      res.send({
        status: status.INS_ERROR
      });
    }
  });

};
