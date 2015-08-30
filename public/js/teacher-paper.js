$(function() {

  var successId = "创建成功";
  var paperId;
  var score = $("#score").val();
  var subject = $("#subjectName").val();
  var paperName = $("#paperName").val();
  $("#singleSure").attr("disabled", true);
  $("#singleEmpty").attr("disabled", true);
  $("#multipleSure").attr("disabled", true);
  $("#multipleEmpty").attr("disabled", true);
  $("#submitFill").attr("disabled", true);

  $("#addPaper").on("click", function() {
    $.post("teacher/paper", {
      paperName: paperName,
      subject: subject,
      score: score
    }, function(data) {
      if (data.status === STATUS.DATA_SUCCESS) {
        paperId = data.data;
        alert(successId);
        $("#singleSure").removeAttr("disabled");
        $("#singleEmpty").removeAttr("disabled");
        $("#multipleSure").removeAttr("disabled");
        $("#multipleEmpty").removeAttr("disabled");
        $("#submitFill").removeAttr("disabled");
        $(".createPaper").hide();
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
    var questionInfo = data;
    $.post('/teacher/question', {
      paperId: paperId,
      data: data
    }, function(result) {
      if (result.status === STATUS.DATA_SUCCESS) {
        $(".showPaper").append(questionInfo.questionContent);
        questionInfo.optionContent.forEach(function(val) {
          $(".showPaper").append("</br>" + val);
        });
      }
    });
  });

});
