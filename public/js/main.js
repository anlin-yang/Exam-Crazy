$(function() {
  $("#submit").on("click", function() {
    var forms = $('form')[0];
    var form=new formSerializer();
    var data=form.getFormInfo(forms);
    $.get('/submit/getform', {
      data:data
    }, function(msg) {
      console.log(2);
    });
  });
});
