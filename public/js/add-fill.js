$(function() {
  var temp = 0;

  $('#fill_answers').click(function() {
    temp ++;
    var question = $('#fill_question').val();
    if (question.length === 0) {
      $('#judge1').html('还没有写题目！');
    } else {
      console.log(question);
      if (temp > 0) {
        console.log($('#fill_question').val());
        console.log(question);
        if ($('#fill_question').val() !== question) {
          $('#judge1').html('');
          var blank = question.split("_");
          var count = blank.length - 1;
          var str = '';
          while (count--) {
            str = '<input type="text" class="input form-group" id="fill" name="fill"><br>';
            $('#add_fill').append(str);
          }
        }

      }
    }
  });



  // var i = 0;
  // while(count--) {
  //   str.push({answer:ss});
  // }
  // $.ajax({
  //   url: '/addFill/fillAnswers',
  //   data: {
  //     str: str
  //   },
  //   type: 'POST',
  //   success: function() {
  //     var answers = $("[name='fill']");
  //     if (answers.length === str.length) {
  //       $('#surefill').click(function() {
  //         for (var i = 0; i < answers.length; i++) {
  //           if (answers[i].length === 0) {
  //
  //           }
  //         }
  //       });
  //     }
  //   }
  // });




});
