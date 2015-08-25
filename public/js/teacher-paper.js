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
    $.get("teacher/single", function(data) {
      $("#addItem").empty();
      $("#addItem").append(data);
    });
  });

  $("#multiple").on("click", function() {
    $.get("teacher/multiple", function(data) {
      $("#addItem").empty();
      $("#addItem").append(data);
    });
  });
});
