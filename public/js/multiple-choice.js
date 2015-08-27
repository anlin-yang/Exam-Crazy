function addMultipleChoice(){

      $('#multipleEmpty').click(function(){
      $('.input').val("");
      [].forEach.call($("[name='multipleAnswer']"), function(elem) {
        elem.checked = false;
      });
    });

    $('#multipleSure').click(function(){

      var allmultiple = $("[name='multipleQuestion']");
      var item = $("[name='multipleAnswer']");
      var answer = '';
      for (var x = 0; x < item.length; x++) {
        if (item[x].checked) {
          answer += item[x].value;
        }
      }

      var questionInformation = '',questionAnswer = '',count = 0;
      var htmlInformation ='';
      var option =['question','A','B','C','D'];

      for (var k = 0; k < allmultiple.length; k++) {
        if (!(allmultiple[k].value)) {
          var itemOne = '#' + option[k] + 'multipleoption';
          $(itemOne).show();
          $(itemOne).delay(3000).hide(1);
        } else {
          htmlInformation += option[k] + ':' + allmultiple[k].value + '<br>';
          questionInformation += allmultiple[k].value + '-';
          count++;
        }
      }
      if (count === allmultiple.length) {
        var information = {
          questionInformation: questionInformation,
          questionAnswer: answer
        };

        $.ajax({
          url: 'teacher/multipleChoice',
          data: information,
          type: 'POST',
          success: function(successfulTip) {
            if(successfulTip.status === STATUS.DATA_SUCCESS){
              successdata = successfulTip.multipleID;
              $('.input').val("");

              [].forEach.call($("[name='multipleAnswer']"), function(elem) {
                elem.checked = false;
              });
              $('#showPaper').append("<li>" + htmlInformation + "</li>");
              $("#success").show();
              $("#success").delay(3000).hide(1);
            }else if(successfulTip.status === STATUS.INS_ERROR){
              $("#failed").show();
              $("#failed").delay(3000).hide(1);
            }
          }
        });
      }
    });
  
}
