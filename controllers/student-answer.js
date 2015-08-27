var models = require('../models');
var _ = require('lodash');

var StudentAnswer = {};
var classifyResult = {};


function filterContents(data) {

  var datas = data.dataValues.questionArray.split(/\[|\]|,/);
  var contents = filterDatas(datas);
  return contents;

}

function filterDatas(datas) {
  var contents = datas.filter(function(val) {
    if (val.length !== 0) {
      return val;
    }
  });
  return contents;
}

function mapContents(data) {
  return data.map(function(val) {
    return val.dataValues;
  });
}

function classifyContents(questiones) {
  return _.groupBy(questiones,function(question) {
    return question.typeId;
  });
}

function seprateAnswer(arr) {

    for(var i = 0; i < arr.length; i++) {
        var option = [];
       option = arr[i].questionContent.split('-');
        arr[i].answer = option;
    }
}

StudentAnswer.findPaper = function(req, res) {
  var title;
  models.Paper.findById(req.query.paperId)
    .then(function(data) {
      title = data.dataValues.paperName;
      contents = filterContents(data);
      return models.Question.findQuestionContents(contents);
    }).then(function(data) {
      var mapContent = mapContents(data);
      classifyResults = classifyContents(mapContent);
          seprateAnswer(classifyResults['2']);
      seprateAnswer(classifyResults['3']);
      res.render('student-answer',{blankContents: classifyResults['1'],
                                  singleChooseContents: classifyResults['2'],
                                  mutilChooseContents: classifyResults['3'],
                                  title: title});
    });
};


module.exports = StudentAnswer;
