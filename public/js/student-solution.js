$(function() {
  $("#submit").on("click", function() {
    var forms = $('form')[0];
    var form = new formSerializer();
    var data = form.getFormInfo(forms);
    $.post('/studentSolution', {
      data: data
    }, function(msg) {});
  });
});
