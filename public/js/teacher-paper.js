$(function() {
  $("#submit").on("click", function() {
    var paperName = $("#paperName").val();
    var subject = $("#subjectName").val();
    $.post('/teacher', {
      paperName: paperName,
      subjectName: subject
    }, function(msg) {});
  });

<<<<<<< Updated upstream
  $("#addfill").on("click", function() {
=======
  $("#single").on("click", function() {
    $.post("teacher/single", function(data) {
      $("#addItem").empty();
      var content=$(data).find("#content");
      $("#addItem").append(content);
    });
  });
>>>>>>> Stashed changes

    // $.post("teacher/fill", function(data) {
      addfill();
      // $("#addItem").empty();
      // var content = $(data).find("#content");
      // $("#addItem").append(content);
    });
  // });

});
