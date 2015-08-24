var paper_name = '语文';
var paper_content;
var models = require('../models');

models.papers.findAll({
  where: {
    paper_name: paper_name
  }
}).then(function(data) {
  if(data.length === 0) {
    console.log("Don't have this paper in the testLibrary!");
  } else {
    paper_content = data[0].dataValues.question_array;
  }
});
console.log(paper_content);
