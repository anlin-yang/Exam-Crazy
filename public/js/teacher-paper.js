$(function() {
  $("#submit").on("click", function() {
    var paperName = $("#paperName").val();
    var subject = $("#subjectName").val();
    $.post('/teacher', {
      paperName: paperName,
      subjectName: subject
    }, function(msg) {});
  });

  $("#addfill").on("click", function() {

    // $.post("teacher/fill", function(data) {
      addfill();
      // $("#addItem").empty();
      // var content = $(data).find("#content");
      // $("#addItem").append(content);
    });
  // });

});
