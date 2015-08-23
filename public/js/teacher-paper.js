$(function() {

  $("#submit").on("click", function() {
    var data = $("#paperName").val();
    $.get('/teacher',{
      data: data
    }, function(msg) {

    });
  });
});
