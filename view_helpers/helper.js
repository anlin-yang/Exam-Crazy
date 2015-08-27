var hbs = require('express-hbs');

function printChoiecQuestion(options) {
  var text = '';
  var questionNumber = 0;
  for (var i = 0; i < options.length; i++) {
    questionNumber += 1;
    text += "<h5>" + questionNumber + '.' + '  ';
    for (var j = 0; j < options[i].length; j++) {
      text += options[i][j].content + '<p>';
    }
    text += "</h5>";
  }

  return text;
}

hbs.registerHelper('singleChoice', function(options) {
  return new hbs.SafeString(printChoiecQuestion(options));
});

hbs.registerHelper('addBlank', function(options) {
  return new hbs.SafeString(printChoiecQuestion(options));
});

hbs.registerHelper('manyChoice', function(options) {
  return new hbs.SafeString(printChoiecQuestion(options));
});
