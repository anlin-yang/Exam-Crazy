$(function() {
  $('body').on('click', "#cancel", function() {
    $('.input').val("");
    [].forEach.call($("[name='multipleAnswer']"), function(elem) {
      elem.checked = false;
    });
  });
  $('body').on('click', "#sure", function() {

    var array = ['#multipleQuestion', '#A', '#B', '#C', '#D'],
      value = [];
    for (var i = 0; i < array.length; i++) {
      value[i] = $(array[i]).val();
    }

    var item = $("[name='multipleAnswer']");
    var answer = '';
    for (var x = 0; x < item.length; x++) {
      if (item[x].checked) {
        answer += item[x].value;
      }
    }

    var questionInformation = '',
      questionAnswer = '',
      count = 0;

    for (var k = 0; k < array.length; k++) {
      if (!(value[k])) {
        var itemOne = array[k] + 'option';
        $(itemOne).show();
        $(itemOne).delay(3000).hide(1);
      } else {
        questionInformation += value[k] + '-';
        count++;
      }
    }
    if (count === 5) {
      var information = {
        questionInformation: questionInformation,
        questionAnswer: answer
      };

      $.ajax({
        url: '/addmultiple',
        data: information,
        type: 'POST',
        success: function(successfulTip) {
          console.log(successfulTip);
          $('.input').val("");
          [].forEach.call($("[name='multipleAnswer']"), function(elem) {
            elem.checked = false;

            $("#addBox").show();
            $("#addBox").delay(3000).hide(1);
          });
        }
      });
    }
  });
});
