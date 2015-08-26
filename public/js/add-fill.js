function addFill() {

  $('#fill_answers').click(function() {
    $('#answer').html('');
    var question = $('#fill_question').val();
    if (question.length === 0) {
      $('#judge1').html('还没有写题目！');
    } else {
      $('#judge1').html('');
      var blank = question.split("_");
      var count = blank.length - 1;
      var fillBlacks = '';
      for (var i = 0; i < count; i++) {
        fillBlacks += '<input type="text" class="input form-group" id="inputAnswers" name="inputAnswers" value=""><br>';
      }
      if (i <= 0) {
        $('#judge1').html('请输入要填的空');
      } else {
        fillBlacks += '<input type="button" class="btn btn-primary form-group" id="submitFill" name="name" value="提交">';
      }
      $('#answers').html(fillBlacks);
      $("#submitFill").click(function() {
        var inputAnswers = $("[name='inputAnswers']");
        var temp = 0;
        var answers = '';
        var answersCount = 0;
        for (var x = 0; x < inputAnswers.length; x++) {
          if (inputAnswers[x].value.length === 0) {
            $('#answer').html('请输入完整的答案！');
            temp = 1;
            break;
          } else {
            answersCount++;
            answers += '-';
            answers += inputAnswers[x].value;
          }
        }

        if (temp === 0) {
          $('#answer').html('');
          var fill = {
            question: question,
            answers: answers,
            point: answersCount
          };

          $.ajax({
            type: 'POST',
            url: '/addFill',
            data: {
              fill: fill
            },
            success: function(result) {
              if (result.status === STATUS.DATA_SUCCESS) {
                $('#submitSuccess').show();
                $('#answers').html('');
                $('#fill_question').val('');
                $('#submitSuccess').delay(3000).hide(1);
              } else if (result.status === status.INS_ERROR) {
                $('#submitSuccess').html('入库失败！');
              }
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
}
