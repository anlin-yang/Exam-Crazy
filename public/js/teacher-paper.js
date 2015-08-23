$(function() {
  $("#submit").on("click", function() {
    var data = $("#paperName").val();
    $.post('/teacher',{
      data: data
    }, function(msg) {

    });
  });
});
