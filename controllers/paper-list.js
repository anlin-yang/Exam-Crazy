var models = require('../models');
var Score = models.Score;
var Paper = models.Paper;



function PaperList() {

}

PaperList.prototype.getPaperList = function(req, res) {
  var paperList = [];
  var scoreList = [];
  //var studentId=req.body.studentId;
  var studentId = 1;

  Paper.findAll().then(function(data) {
    data.forEach(function(val) {
      paperList.push({
        id: val.dataValues.id,
        paperName: val.dataValues.paperName,
        status: '未答',
        deal: '点击答题'
      });
    });

    Score.findAll().then(function(data) {
      data.forEach(function(val) {
        scoreList.push({
          paperId: val.dataValues.paperId,
          studentId: val.dataValues.studentId,
          score: val.dataValues.score
        });
      });
      paperList.forEach(function(val) {
        scoreList.forEach(function(item) {
          if (val.id === item.paperId) {
            val.status = item.score.toString();
            val.deal = '查看详情';
          }
        });
      });

      res.render('paper-list', {
        paperList: paperList
      });
    });
  });
};

module.exports = PaperList;
