$(function() {
  $('.checkbtn').on('click',function() {
    alert('hello');
    $.get('app/check.html', function(resp) {
      showcheckpage(resp);
    });
  });

  $('.right').on('click','td',function(resp) {
    var temp = $(this).eq(0).text();

    $.get('app/page.html',{str:temp}, function(resp) {

    });
  });
});


function showcheckpage(str) {
  $('.right').empty();
  str.map(function(val) {
    $('.right').append('<tr><td><a href="app/page.html?name=songjianhua">'+val.paper_name+'</a></td><tr>');
  });
}

function showonepage(str) {
  $('.right').empty();
  str.map(function(val) {
    $('.right').append();
  });
}
