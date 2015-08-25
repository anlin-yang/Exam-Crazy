var models = require('../models');

function AddFill() {

}

AddFill.prototype.fill = function(req,res) {
    res.render('add-fill', {
      title: 'Express',
    });
};

AddFill.prototype.addFill = function(req, res) {
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
