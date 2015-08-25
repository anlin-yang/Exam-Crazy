$(function() {
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
      fillBlacks += '<input type="button" class="btn btn-primary form-group" id="submitFill" name="name" value="提交">';

      $('#answers').html(fillBlacks);

      $("#submitFill").click(function() {
        var inputAnswers = $("[name='inputAnswers']");
        var temp = 0;
        var answers = [];

        for (var x = 0; x < inputAnswers.length; x++) {
          if (inputAnswers[x].value.length === 0) {
            $('#answer').html('请输入完整的答案！');
            temp = 1;
            break;
          } else {
            answers.push(inputAnswers[x].value);
          }
        }

        if (temp === 0) {
          $('#answer').html('');
          var fill = {
            question: question,
            answers: answers
          };
          $.ajax({
            type: 'POST',
            url: '/addFill/fill',
            data: {
              fill: fill
            },
            success: function(result) {}
          });

        }

      });
    }
  });
});
