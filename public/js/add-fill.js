$(function() {
  $('#fillAnswers').click(function() {
    $('#fillAnswerJudge').html('');
    var question = $('#fillQuestion').val();
    if (question.length === 0) {
      $('#fillQusetionJudge').html(fillStatus.FILL_QUESTION_NULL);
    } else {
      $('#fillQusetionJudge').html('');
      var blank = question.split("_");
      var count = blank.length - 1;
      var fillBlacks = '';
      for (var i = 0; i < count; i++) {
        fillBlacks += '<input type="text" class="input form-group" id="inputFillAnswers" name="inputFillAnswers" value=""><br>';
      }
      if (i <= 0) {
        $('#fillQusetionJudge').html(fillStatus.FILL_BLANK_NULL);
      } else {
        fillBlacks += '<input type="button" class="btn btn-primary form-group" id="submitFill" name="name" value="提交">';
      }
      $('#fillBlank').html(fillBlacks);
      $("#submitFill").click(function() {
        var inputAnswers = $("[name='inputFillAnswers']");
        var temp = 0;
        var answers = '';
        var answersCount = 0;
        var allAnswers = [];
        for (var x = 0; x < inputAnswers.length; x++) {
          if (inputAnswers[x].value.length === 0) {
            $('#fillAnswerJudge').html(fillStatus.FILL_ANSWERS_INCOMPLETE);
            temp = 1;
            break;
          } else {
            answersCount++;
            answers += '-';
            answers += inputAnswers[x].value;
          }
        }

        if (temp === 0) {
          $('#fillAnswerJudge').html('');
          var fill = {
            question: question,
            answers: answers,
            point: answersCount
          };

          $.ajax({
            type: 'POST',
            url: '/fill',
            data: {
              fill: fill
            },
            success: function(result) {
              if (result.status === STATUS.DATA_SUCCESS) {
                fillQuestionId = result.questionId;
                $('#submitResult').show();
                $('#fillBlank').html('');
                $('#fillQuestion').val('');
                $('#submitResult').delay(3000).hide(1);
              } else if (result.status === STATUS.INS_ERROR) {
                $('#submitResult').html(fillStatus.FILL_INSERT_FAIL);
                $('#submitResult').delay(3000).hide(1);
              }
              return fillQuestionId;
            }
          });
          $.ajax({
            type: 'POST',
            url: 'teacher/fill',
            data: {
              fill: fill
            },
            success: function(result) {
              var realanswers = answers.split("-");
              if (result.status === STATUS.DATA_SUCCESS) {
                realanswers.forEach(function(val) {
                  $('#showPaper').append("<tr>" +
                    "<td>" + "题目：" + question + "</td>" +
                    "<td>" + "答案:" + val + "</td>" + "</tr>");
                });
              } else if (result.status === STATUS.INS_ERROR) {
                $('#submitSuccess').html('入库失败！');
              }
            }
          });
        }
      });
    }

  });
});
