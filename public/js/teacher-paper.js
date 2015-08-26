$(function() {
  var PaperId = [];
  var fillBlank = $("#fillBlank");
  var singleChoice = $("#singleChoice");
  var mutilipeChoice = $("#multipleChoice");
  singleChoice.hide();
  mutilipeChoice.hide();

  $("#fill").on("click", function() {

  });

  $("#single").on("click", function() {
    $("#singleChoice").show();

    var singleChoice = getSingleChoice();

    PaperId.push(singleChoice);


  });

  $("#multiple").on("click", function() {
    fillBlank.hide();
    singleChoice.hide();
    mutilipeChoice.show();
    var multipleChoice = addMultipleChoice();
  });

  $("#submit").on("click", function() {
    var paperName = $("#paperName").val();
    var subject = $("#subjectName").val();
    $.post('/teacher', {
      paperName: paperName,
      subjectName: subject
    }, function(result) {

    });
  });

});
