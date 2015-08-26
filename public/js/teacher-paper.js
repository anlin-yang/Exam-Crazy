$(function() {
  var fillBlank=$("#row");
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

  $("#single").on("click",function(){
    fillBlank.hide();
    $("#single").show();
  });

  $("#mutilipe").on("click",function(){
    fillBlank.hide();
    $("#mutilipe").show();
  });

  $("#judge").on("click",function(){
   fillBlank.hide();
    $("#judge").show();
  });

});
