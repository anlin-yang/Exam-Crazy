$(function() {
  var requestData;
  var questionType;
  var fillBlanks = $("#fillBlank");
  var singleChoices = $("#singleChoice");
  var multipleChoices = $("#multipleChoice");
  singleChoices.hide();
  multipleChoices.hide();

  $("#fill").on("click", function() {
    multipleChoices.hide();
    singleChoices.hide();
    fillBlanks.show();
    addFill(fill);
  });

  $("#single").on("click", function() {
    fillBlanks.hide();
    multipleChoices.hide();
    singleChoices.show();
    addSingleChoice(single);
  });

  $("#multiple").on("click", function() {
    fillBlanks.hide();
    singleChoices.hide();
    multipleChoices.show();
    addMultipleChoice(multiple);
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
