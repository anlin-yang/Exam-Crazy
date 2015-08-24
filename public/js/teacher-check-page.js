$(function() {
  $('.checkpage').on('click',function() {
    $.get('teacher-check/check.html', function(resp) {
      showcheckpage(resp);
    });
  });
});

function showcheckpage(str) {
  $('.right').empty();
  str.map(function(val) {
    var temp = val.paper_name;
    $('.right').append("<tr><td><a target=_blank href=teacher-check/page?name="+temp+">" +val.paper_name+'</a></td><tr>');
  });
}
