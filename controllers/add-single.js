var models = require('../models');
var questions = models.Question;

function AddSingle() {

}

AddSingle.prototype.getAddSingle = function(req, res) {
  res.render('add-single.hbs');
};

AddSingle.prototype.postAddSingle = function(req, res) {
  var question = req.body.questionInformation;
  var answer = req.body.questionAnswer;

  questions.create({
    questionKey: answer,
    questionContent: question,
    questionPoint: 1,
    typeId: 1
  }).then(function(data) {
    if (data.length !== 0) {
      res.send({
        status: 200,
        singleID: data.dataValues.id
      });
  }
});
};


module.exports = AddSingle;
