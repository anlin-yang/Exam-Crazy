var status = require('../public/js/status.js');
var models = require('../models');

function TeacherCheckPage() {
  this.result = [];
}

TeacherCheckPage.prototype.root = function(req, res) {
  res.render('teacher-check-page');
};

TeacherCheckPage.prototype.check = function(req, res) {
  models.Paper.findAll().then(function(data) {
    if (data.length === 0) {
      res.send({
        status: status.QUR_ERROR,
        data: {}
      });
    } else {
      res.send({
        status:status.DATA_SUCCESS,
        data:data
      });
    }
  });
};

TeacherCheckPage.prototype.page = function(req, res) {
  var temp = req.query.name;
  var that = this;
  models.Paper.findQuestionArray(temp).then(function(data) {

    var tempArray = filterTheArray(data.dataValues.questionArray);

    models.Question.findQuestionContents(tempArray).then(function(data) {
      var tempContents = dealQuestionContent(data);
      var tempIdArray = findTypeId(data);
      that.result = tempContents;

      models.Type.findAll().then(function(data) {
        addType(data, that.result);

        res.render('page.hbs', {
          name: temp,
          array: that.result
        });

      });
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
  var result = [];
  data.map(function(val) {
    var temp = val.questionContent.split('-');

    if (temp.length > 1) {
      result.push({
        "typeId": val.typeId,
        "questionContent": temp[0],
        "answerA": temp[1],
        "answerB": temp[2],
        "answerC": temp[3],
        "answerD": temp[4]
      });
    } else {
      result.push({
        "questionContent": temp[0]
      });
    }
  });

  return result;
}

function findTypeId(data) {
  var tempIdArray = [];
  data.map(function(val) {
    tempIdArray.push(val.typeId.toString());
  });

  return tempIdArray;
}

function addType(data, result) {
  data.map(function(val) {
    result.map(function(temp) {
      if (val.id === temp.typeId) {
        temp.type = val.type;
      }
    });
  });
}
module.exports = TeacherCheckPage;
