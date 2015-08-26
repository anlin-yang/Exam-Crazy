$(function() {
  $('.checkpage').on('click', function() {
    $.get('teacherCheck/check', function(resp) {
      if (resp.status === STATUS.DATA_SUCCESS) {
        showcheckpage(resp.data);
      } else {
        console.log('查询失败');
      }
    });
  });
});

function showcheckpage(str) {
  $('.right').empty();
  str.map(function(val) {
    var temp = val.paperName;
    $('.right').append("<tr><td><a target=_blank href=teacherCheck/page?name=" + temp + ">" + val.paperName + '</a></td><tr>');
  });
}
