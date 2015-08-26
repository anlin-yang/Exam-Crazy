var status = require('../public/js/status.js');
var models = require('../models');

var teacherCheckPage = {};
var result = [];
var singleChoice = [];
var addBlank = [];
var manyChoice = [];

var questionBuilder = {
  '1': function(typeId, temp) {
    singleChoice.push({
      "typeId": typeId,
      "questionContent": temp[0],
      "answerA": temp[1],
      "answerB": temp[2],
      "answerC": temp[3],
      "answerD": temp[4]
    });
  },
  '2': function(typeId, temp) {
    addBlank.push({
      "typeId": typeId,
      "questionContent": temp[0]
    });
  },
  '3': function(typeId, temp) {
    manyChoice.push({
      "typeId": typeId,
      "questionContent": temp[0]
    });
  }
};

teacherCheckPage.root = function(req, res) {
  res.render('teacher-check-page');
};

teacherCheckPage.check = function(req, res) {
  models.Paper.findAll().then(function(data) {
    if (data.length === 0) {
      res.send({
        status: status.QUR_ERROR,
        data: {}
      });
    } else {
      res.send({
        status: status.DATA_SUCCESS,
        data: data
      });
    }
  });
};

function initArrays() {
  singleChoice = [];
  addBlank = [];
  manyChoice = [];
}

teacherCheckPage.page = function(req, res) {
  var temp = req.query.name;
  initArrays();
  models.Paper.findQuestionArrayBypaperName(temp).then(function(data) {
    var tempArray = filterTheArray(data.dataValues.questionArray);
    return models.Question.findQuestionContentsById(tempArray);
  }).then(function(data) {
    dealQuestionContent(data);
    console.log(addBlank);
    res.render('page', {
      name: temp,
      singleChoice: singleChoice,
      addBlank: addBlank,
      manyChoice: manyChoice
    });
  });
};

function filterTheArray(data) {
  var str = data.split(/\[|\]|,/);
  var tempArray = str.filter(function(val) {
    if (val.length !== 0) {
      return parseInt(val);
    }
  });
  return tempArray;
}

function dealQuestionContent(data) {
  data.map(function(val) {
    var temp = val.dataValues.questionContent.split('-');
    questionBuilder[val.typeId](val.typeId, temp);
  });
}

module.exports = teacherCheckPage;
