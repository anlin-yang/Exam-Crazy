var models = require('../models');

function AddFill() {

}

AddFill.prototype.add = function(req, res) {
  var fill = req.body.fill;
  models.Question.create({
    typeId: 3,
    questionContent: fill.question,
    questionKey: fill.answers,
    questionPoint: fill.count
  }).then(function(data) {
    if (data.dataValues.id > 0) {
      res.send({
        question: data.dataValues.id,
        status: 200
      });
    } else {
      res.send({
        status: 501
      });
    }
  });
};

module.exports = AddFill;
