$(function() {
  $('.checkbtn').on('click',function() {
    alert('hello');
    $.get('check/check.html', function(resp) {
      showcheckpage(resp);
    });
  });

  $('.right').on('click','td',function(resp) {
    var temp = $(this).eq(0).text();
  });
});


function showcheckpage(str) {
  $('.right').empty();
  str.map(function(val) {
    $('.right').append('<tr><td>'+val.paper_name+'</td><tr>');
  });
}

function showonepage(str) {
  $('.right').empty();
  str.map(function(val) {
    $('.right').append();
  });
}
