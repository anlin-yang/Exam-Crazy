$(function() {
  $('#suretocheck').on('click',function() {
    var temp = $(this).data('name');
    $.get('teacher-check/suretocheck',{name:temp},function(resp) {
      
    });
  });
});
