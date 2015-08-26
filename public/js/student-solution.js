$(function() {
  $("#submit").on("click", function() {
    var forms = $('form')[0];
    var form = new formSerializer();
    var data = form.getFormInfo(forms);
    $.post('/studentSolution', {
      data: data
    }, function(result) {
      if (result.status === STATUS.DATA_SUCCESS) {
        alert("提交成功");
      } else {
        alert("提交失败，请再试一次");
      }
    });
  });
});
