$(function() {
  $('body').on('click', "#cancel", function() {
    $('.input').val("");
    [].forEach.call($("[name='answer']"), function(elem) {
      elem.checked = false;
    });
  });

  $('body').on('click', "#sure", function() {

    var array = ['#question','#A','#B','#C','#D'];
    var value =[];
    for(var i = 0; i < array.length;i++){
      value[i] = $(array[i]).val();
    }

    var item = $("[name='answer']");
    var answer;
    for (var x = 0; x < item.length; x++) {
      if (item[x].checked) {
        answer = item[x].value;
        break;
      }
    }

    var questionInformation = '';
    var questionAnswer = '';

    for(var k = 0; k < value.length; k++){
      if(!(value[k])) {
        var itemOne = array[k] + 'option';
        var itemTwo = array[k] + '选项忘记填写！';
        $(itemOne).html(itemTwo);
      }else {
        questionInformation += value[k] + '-';
      }
    }
    var information = {
      questionInformation: questionInformation,
      questionAnswer: answer
    };

      $.ajax({
        url: '/addsingle',
        data: information,
        type: 'POST',
        success: function(successfulTip) {
          console.log(successfulTip);
          $('.input').val("");
          [].forEach.call($("[name='answer']"), function(elem) {
            elem.checked = false;

            $("#addBox").show();
            $("#addBox").delay(3000).hide(1);
          });
        }
      });
  });
});
