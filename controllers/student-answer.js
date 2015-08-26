var models = require('../models');

var paperName = '第一学期语文考试';
var StudentAnswer = {};
var blankContents = [];
var singleContents = [];
var mutilContents = [];

var classifyResult = {
  '1': function(questionObject) {
    blankContents.push(questionObject);
  },
  '2': function(questionObject) {
    singleContents.push(questionObject);
  },
  '3': function(questionObject) {
    mutilContents.push(questionObject);
  }
};

StudentAnswer.findPaper = function(req, res) {
  models.Paper.findQuestionArray(paperName)
    .then(function(data) {
      contents = filterContents(data);
      return models.Question.findQuestionContents(contents);
    }).then(function(data) {
      var mapContent = mapContents(data);
      classifyContents(mapContent);
      res.send(blankContents);
    });
};


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

function classifyContents(contents) {
  var afterChangeResult = [];

  contents.forEach(function(question) {
    var questionObject = {};
    questionObject.questionId = question.id;
    questionObject.typeId = question.typeId;
    questionObject.Content = question.questionContent;
    questionObject.point = question.questionPoint;
    classifyResult[question.typeId](questionObject);
  });
}

module.exports = StudentAnswer;
