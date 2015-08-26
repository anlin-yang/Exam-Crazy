$(function() {
  $('#paperList tbody tr').on('click', '#deal', function() {
    var deal = $(this).eq(0).text().trim();
    var PaperItem = $(this).parent().children();
    var PaperId = PaperItem.eq(0).text().trim();
    if (deal === '点击答题') {
      $.get('/student-answer',{data:PaperId},function(){
        
      });

      }

  });
});
