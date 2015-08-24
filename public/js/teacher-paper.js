$(function() {
  $("#submit").on("click", function() {
    var paperName = $("#paperName").val();
    var subjectName = $("#subjectName").val();
    $.post('/teacher', {
      paperName: paperName,
      subject: subjectName
    }, function(msg) {
    });
  });
});
