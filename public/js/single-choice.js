$(function() {

  $('#singleSure').click(function() {
    var questionInformation = $("[name='singleQuestion']").val();
    var questionOption = $("[name='singleQuestionOption']");
    var item = $("[name='singleAnswer']");
    var answer;
    for (var x = 0; x < item.length; x++) {
      if (item[x].checked) {
        answer = item[x].value;
        break;
      }
    }

    var optionInformation = [];
    var itemOption = ['A', 'B', 'C', 'D'];

    for (var m = 0; m < questionOption.length; m++) {
      if (!(questionOption[m].value)) {
        $('#' + itemOption[m] + 'singleoption').show();
        $('#' + itemOption[m] + 'singleoption').delay(3000).hide(1);
      } else {
        optionInformation.push(itemOption[m] + ':' + questionOption[m].value);
      }
    }

      var information = {
        questionContent: questionInformation,
        questionKey: answer,
        questionPoint: 1,
        typeId: 1,
        optionContent: optionInformation
      };
      $("#addItem>.content").data("onData")(information);
  });
});
