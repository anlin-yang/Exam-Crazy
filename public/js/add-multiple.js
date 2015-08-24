$(function() {
  $('body').on('click', "#cancel", function() {
    $('.input').val("");
    [].forEach.call($("[name='answer']"), function(elem) {
      elem.checked = false;
    });
  });
  $('body').on('click', "#sure", function() {

    var question = $("#question").val();
    var A = $("#A").val();
    var B = $("#B").val();
    var C = $("#C").val();
    var D = $("#D").val();
    var item = $("[name='answer']");
    var answer = '';
    for (var i = 0; i < item.length; i++) {
      if (item[i].checked) {
        answer += item[i].value;
      }
    }

    if (!(question)) {
      $("#questionPrompt").html("问题忘记填写！");
    } else if (!(A)) {
      $("#optionA").html("A选项忘记填写！");
    } else if (!(B)) {
      $("#optionB").html("B选项忘记填写！");
    } else if (!(C)) {
      $("#optionC").html("C选项忘记填写！");
    } else if (!(D)) {
      $("#optionD").html("D选项忘记填写！");
    } else {
      var information = {
        question_information: question + '-' + A + '-' + B + '-' + C + '-' + D,
        question_answer: answer
      };

      $.ajax({
        url: '/addmultiple',
        data: information,
        type: 'POST',
        success: function(successfulTip) {
          console.log(successfulTip);
          $('.input').val("");

          [].forEach.call($("[name='answer']"), function(elem) {
            elem.checked = false;
          });

          $("#addBox").show();
          $("#addBox").delay(3000).hide(1);
        }
      });
    }
  });
});
