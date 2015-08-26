$(function() {
  var fillBlank = $("#fillBlank");
  var singleChoice = $("#singleChoice");
  var mutilipeChoice = $("#mutilipeChoice");
  singleChoice.hide();
  mutilipeChoice.hide();

  $("#submit").on("click", function() {
    var paperName = $("#paperName").val();
    var subject = $("#subjectName").val();
    $.post('/teacher', {
      paperName: paperName,
      subjectName: subject
    }, function(result) {

    });
  });

  addFill();

  $("#single").on("click", function() {
    $("#singleChoice").show();
    var singleChoice = getSingleChoice();

  });

  $("#mutilipe").on("click", function() {
    fillBlank.hide();
    singleChoice.hide();
    $("#mutilipe").show();
  });

});
