$(function () {
    $('#submitFill').on('click', function () {
        var question = $('#fillQuestion').val();
        var answer = $('#fillAnswer').val();
        if (question.length === 0) {
            $('#fillQusetionJudge').html(fillStatus.FILL_QUESTION_NULL);
        } else {
            $('#fillQusetionJudge').html('');
        }
        if (answer.length === 0) {
            $('#fillAnswerJudge').html(fillStatus.FILL_ANSWERS_INCOMPLETE);
        } else {
            $('#fillAnswerJudge').html('');
        }
        if (answer.length > 0 && question.length > 0) {
            var addFill = {
                typeId: 3,
                questionContent: question,
                questionKey: answer,

                questionPoint: 1
            };
            $("#addItem>.content").data("onData")(addFill);
        }
    });
});
