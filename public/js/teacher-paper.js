$(function() {
  $("#submit").on("click", function() {
    var paperName = $("#paperName").val();
    var subject = $("#subjectName").val();
    $.post('/teacher', {
      paperName: paperName,
      subjectName: subject
    }, function(msg) {

    });
  });

  $("#addfill").on("click", function() {

    $.post("teacher/single", function(data) {
      $("#addItem").empty();
      var content=$(data).find("#content");
      $("#addItem").append(content);
    });
  });

});
