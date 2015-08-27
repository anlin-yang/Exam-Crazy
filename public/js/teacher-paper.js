$(function() {
  $('#questionType').on('click', 'input', function() {
    var className = $(this).attr('class');
    $('#addItem>.content').each(function(key, question) {
      console.log(className);
      if ($(question).hasClass(className)) {
        $(question).show();
      } else {
        $(question).hide();
      }
    });
  });
});
