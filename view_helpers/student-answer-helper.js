var hbs = require('express-hbs');
var choice = ['A.','B.','C.','D.','E.'];

hbs.registerHelper('blank', function (options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var id = i + 1;
    text += "<h4>" + id + '.' + options[i].questionContent + "</h4>";
    for (var j = 0; j < options[i].questionPoint; j++) {
      text += "<input type='text' style='text-border:none' name=" + options[i].questionId + " value=''>";
    }

  }
  return new hbs.SafeString(text);
});

hbs.registerHelper('singleChoose', function (options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var id = i + 1;
    text += "<h4>" + id + '.' + options[i].answer[0] + "</h4>";
    for (var j = 1; j < options[i].answer.length; j++) {
      text += "<input type='radio' name='singleChoose-' " + j + ">"+ choice[j-1] +' '+ options[i].answer[j] + "</br>";
    }
  }
  return new hbs.SafeString(text);
});

hbs.registerHelper('mutilChoose', function (options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var id = i + 1;
    text += "<h4>" + id + '.' + options[i].answer[0] + "</h4>";
    for (var j = 1; j < options[i].answer.length; j++) {
      text += "<input type='radio'  " + ">" + choice[j - 1] + ' ' + options[i].answer[j] + "</br>";
    }
  }
  return new hbs.SafeString(text);
});