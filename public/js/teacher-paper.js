$(function() {
  var PaperId=[];
  var fillBlank = $("#fillBlank");
  var singleChoice = $("#singleChoice");
  var mutilipeChoice = $("#mutilipeChoice");
  singleChoice.hide();
  mutilipeChoice.hide();

  $("#fill").on("click",function(){

  });

  $("#single").on("click", function() {
    $("#singleChoice").show();
<<<<<<< Updated upstream
    var singleChoice = getSingleChoice();
=======
    var singleChoice=singlechoice();
    PaperId.push(singleChoice);
>>>>>>> Stashed changes

  });

  $("#mutilipe").on("click", function() {
    fillBlank.hide();
    singleChoice.hide();
    $("#mutilipe").show();
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
