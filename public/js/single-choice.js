function singlechoice() {
  var singleChoiceId;
  $('#singleEmpty').click(function() {
    $('.input').val("");
    [].forEach.call($("[name='singleAnswer']"), function(elem) {
      elem.checked = false;
    });
  });

  $('#singleSure').click(function() {

    var allsingle = $("[name='singleQuestion']");
    var item = $("[name='singleAnswer']");
    var answer;
    for (var x = 0; x < item.length; x++) {
      if (item[x].checked) {
        answer = item[x].value;
        break;
      }
    }

    var questionInformation = '',
      questionAnswer = '',
      count = 0;
    var option = ['question', 'A', 'B', 'C', 'D'];

    for (var k = 0; k < allsingle.length; k++) {
      if (!(allsingle[k].value)) {

        var itemOne = '#' + option[k] + 'singleoption';
        $(itemOne).show();
        $(itemOne).delay(3000).hide(1);
      } else {
        questionInformation += allsingle[k].value + '-';
        count++;
      }
    }
    if (count === allsingle.length) {
      var information = {
        questionInformation: questionInformation,
        questionAnswer: answer
      };

      $.ajax({
        url: 'teacher/singleChoice',
        data: information,
        type: 'POST',
        success: function(successfulTip) {
          singleChoiceId = successfulTip.singleID;
          console.log(successfulTip);
          $('.input').val("");
          [].forEach.call($("[name='singleAnswer']"), function(elem) {
            elem.checked = false;

            $("#addBox").show();
            $("#addBox").delay(3000).hide(1);
          });
        }
      });
    }
  });
  return singleChoiceId;
}
