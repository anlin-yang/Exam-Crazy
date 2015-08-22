$(function() {
  $('body').on('click', "#sure", function() {

    var question = $("#question").val();
    var A = $("#A").val();
    var B = $("#B").val();
    var C = $("#C").val();
    var D = $("#D").val();
    var item = $("[name='ans']");
    var answer;
    for (var i = 0; i < item.length; i++) {
      if (item[i].checked) {
        answer = item[i].value;
        break;
      }
    }

    if(!(question)){
      $("#que").html("问题忘记填写！");
    }
    if(!(A)){
      $("#quea").html("A选项忘记填写！");
    }
    if(!(B)){
      $("#queb").html("B选项忘记填写！");
    }
    if(!(C)){
      $("#quec").html("C选项忘记填写！");
    }
    if(!(D)){
      $("#qued").html("D选项忘记填写！");
    }

    var information = {
      question_information: question + '-' + A + '-' + B + '-' + C + '-' + D,
      question_answer: answer
    };

    $.ajax({
      url: '/addsingle',
      data: information,
      type: 'POST',
      success: function(successfulTip) {
        console.log(successfulTip);
        $('.input').val("");
      }
    });
  });
});
