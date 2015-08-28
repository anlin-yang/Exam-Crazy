$(function() {

  var paperId;
  $("#addPaper").on("click", function() {
    var score = $("#score").val();
    var subject = $("#subjectName").val();
    var paperName = $("#paperName").val();

    $.post("teacher/paper", {
      paperName: paperName,
      subject: subject,
      score: score
    }, function(data) {
      if (data.status === STATUS.DATA_SUCCESS) {
        paperId = data.data;
        alert("创建成功");
      }
    });
  });

  $('#questionType').on('click', 'input', function() {
    var className = $(this).attr('class');
    $('#addItem>.content').each(function(key, question) {
      if ($(question).hasClass(className)) {
        $(question).show();
      } else {
        $(question).hide();
      }
    });
  });

  $("#addItem>.content").data("onData", function(data) {
    $.post('/teacher/question', {
      paperId: paperId,
      data: data
    }, function(result) {
      if (result.status === STATUS.DATA_SUCCESS) {
        return "true";
      }
    });
  });

});
