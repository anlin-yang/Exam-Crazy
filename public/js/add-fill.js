$(function() {
  $('#submitFill').on('click', function() {
    var optionContent = [];
    var question = $('#fillQuestion').val();
    var answer = $('#fillAnswer').val();
    if (question.length === 0) {
      $('#fillQuestionJudge').html(fillStatus.FILL_QUESTION_NULL);
    } else {
      $('#fillQuestionJudge').html('');
    }
    if (answer.length === 0) {
      $('#fillAnswerJudge').html(fillStatus.FILL_ANSWERS_INCOMPLETE);
    } else {
      $('#fillAnswerJudge').html('');
    }
    if (answer.length > 0 && question.length > 0) {
      optionContent.push(answer);
      var addFill = {
        typeId: 3,
        questionContent: question,
        questionKey: answer,
        optionContent: optionContent,
        questionPoint: 1
      };
      $("#addItem>.content").data("onData")(addFill);
    }
  });
});
