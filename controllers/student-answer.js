var models = require('../models');

var subject = '语文';

var StudentAnswer =  {};

// StudentAnswer.prototype.findPaper = function(res) {
// 	var contents;
// 	models.papers.findPaper(function(mapContent){
//     res.send(mapContent);
//   })
//   models.papers.findPaper(
//       {
//         where:{subject: subject}
//       }
//     ).then(mapContent){
//     res.send(mapContent);
//   }
// };
// Paper.prototype.findPaper = function(creteria){
//   this.findAll( creteria ).then(function(data) {
//     contents = filterContents(data);
//     return findContents(contents);
//         }).then(function(data) {
//           var mapContent = mapContents(data);
//           return new Promise(mapContent);
//         });
// }

StudentAnswer.findPaper = function(req,res){
  models.Paper.findAll({
    where: {
      subject: subject
    }
  }).then(function(data) {
    contents = filterContents(data);
    return findContents(contents);
  }).then(function(data) {
    var mapContent = mapContents(data);
    res.send(mapContent);
  });
};

function filterContents(data) {
	var datas = data.map(function(val){
    return val.dataValues.questionArray.split(/\[|\]|,/);
  });
  var contents = filterDatas(datas);
  return contents;
}

function filterDatas(datas) {
  var contents = datas[0].filter(function(val) {
    if(val.length !== 0) {
      return val;
    }
  });
  return contents;
}

function findContents(contents) {
	return models. Question.findAll({
    where: {
      id: {$in:contents}
    }
  });
}

function mapContents(data) {
  return data.map(function(val) {
    return val.dataValues;
  });
}

module.exports = StudentAnswer;
