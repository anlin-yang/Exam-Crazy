$(function() {

  $('#multipleSure').click(function() {
    var questionInformation = $("[name='multipleQuestion']").val();
    var questionOption = $("[name='multipleQuestionOption']");
    var item = $("[name='multipleAnswer']");
    var answer = '';
    for (var x = 0; x < item.length; x++) {
      if (item[x].checked) {
        answer += item[x].value;
      }
    }

    var optionInformation = [],
      count = 0;
    var itemOption = ['A', 'B', 'C', 'D'];

    for (var m = 0; m < questionOption.length; m++) {
      if (!(questionOption[m].value)) {
        var itemOne = '#' + itemOption[m] + 'multipleoption';
        $(itemOne).show();
        $(itemOne).delay(3000).hide(1);
      } else {
        optionInformation.push(itemOption[m] + ':' + questionOption[m].value);
        count++;
      }
    }

    if (count === questionOption.length) {
      var information = {
        questionContent: questionInformation,
        questionKey: answer,
        questionPoint: 1,
        typeId: 1,
        optionContent: optionInformation
      };
      console.log(information);
      $("#addItem>.content").data("onData")(information);
    }
  });
});
