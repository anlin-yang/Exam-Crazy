$(function() {

  $('#singleSure').click(function() {
    var questionInformation = $("[name='singleQuestion']").val(),answer;
    $("[name='singleAnswer']").each(function() {
      if (this.checked) {
        answer = this.value;
      }
    });

    var optionInformation = [],m = 0;
    var itemOption = ['A', 'B', 'C', 'D'];

    $("[name='singleQuestionOption']").each(function(m) {
      if (this.value) {
        optionInformation.push(itemOption[m] + ':' + this.value);
      } else {
        $('#' + itemOption[m] + 'singleoption').show();
        $('#' + itemOption[m] + 'singleoption').delay(3000).hide(1);
      }
    });

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
