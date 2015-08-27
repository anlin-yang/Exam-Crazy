var models = require('../models');
var paperListStatus = require('../public/js/paper-list-status');
var Score = models.Score;
var Paper = models.Paper;
var studentId = 1;

var PaperList = {};

PaperList.getPaperList = function(req, res) {
  var paperList = [];
  var scoreList = [];

  Paper.findAll().then(function(data) {
    paperList = data.map(function(val) {
      return {
        id: val.dataValues.id,
        paperName: val.dataValues.paperName,
        status: paperListStatus.NO_ANSWERED_STATUS,
        deal: paperListStatus.NO_ANSWERED_DEAL,
        url: 'student-answer'
      };
    });
    return Score.findAll();
  }).then(function(data) {
    scoreList = data.map(function(val) {
      return {
        paperId: val.dataValues.paperId,
        studentId: val.dataValues.studentId,
        score: val.dataValues.score
      };
    });
    paperList.forEach(function(val) {
      scoreList.forEach(function(item) {
        if (val.id === item.paperId) {
          val.status = item.score.toString();
          val.deal = paperListStatus.ANSWERED_DEAL;
          val.url = '';
        }
      });
    });
    res.render('paper-list', {
      paperList: paperList
    });
  });
};

module.exports = PaperList;
