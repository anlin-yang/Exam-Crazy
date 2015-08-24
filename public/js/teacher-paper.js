$(function() {
  $("#submit").on("click", function() {
    var paperName = $("#paperName").val();
    var subject = $("#subjectName").val();
    $.post('/teacher', {
      paperName: paperName,
      subjectName: subject
    }, function(msg) {});
  });
  $("#single").on("click", function() {
    $.get("/single", function(data) {
      $("#addItem").append(data);
    });
  });
});
