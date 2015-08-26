$(function() {
  $('#paperList tbody tr').on('click', '#deal', function() {
    var deal = $(this).eq(0).text().trim();
    if (deal === '查看详情') {
      $.get('', {

      }, function(result) {});
    } else {
      $.get('', {

      }, function(result) {

      });
    }
  });
});
