$(function() {
  var SUCCESSED="提交成功";
  var FAILED="提交失败，请再试一次";
  $("#submit").on("click", function() {
    var forms = $('form')[0];
    var form = new formSerializer();
    var data = form.getFormInfo(forms);
    $.post('/studentSolution', {
      data: data
    }, function(result) {
      if (result.status === STATUS.DATA_SUCCESS) {
        alert(SUCCESSED);
      } else {
        alert(FAILED);
      }
    });
  });
});
