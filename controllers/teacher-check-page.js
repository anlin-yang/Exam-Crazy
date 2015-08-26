var status = require('../public/js/status.js');
var models = require('../models');

var teacherCheckPage = {};
var singleChoice = [];
var addBlank = [];
var manyChoice = [];

function buildChooseQuestion(questionContents) {
  return questionContents.map(function(val) {
    return {
      content: val
    };
  });
}

var questionFactory = {
  '1': function(questionContents) {
    singleChoice.push(buildChooseQuestion(questionContents));
  },
  '2': function(questionContents) {
    addBlank.push(
      buildChooseQuestion(questionContents)
    );
  },
  '3': function(questionContents) {
    manyChoice.push(buildChooseQuestion(questionContents));
  }
};

teacherCheckPage.renderRoot = function(req, res) {
  res.render('teacher-check-page');
};

teacherCheckPage.checkPage = function(req, res) {
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

teacherCheckPage.renderPage = function(req, res) {
  var name = req.query.name;
  initArrays();
  models.Paper
    .findQuestionArrayBypaperName(name).then(function(data) {
      var tempArray = filterTheArray(data.dataValues.questionArray);
      return models.Question.findQuestionContentsById(tempArray);
    }).then(function(data) {
      dealQuestionContent(data);
      res.render('page', {
        name: name,
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
    var questionContents = val.dataValues.questionContent.split('-');
    questionFactory[val.typeId](questionContents);
  });
}

module.exports = teacherCheckPage;
