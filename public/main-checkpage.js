$(function() {
  $('.checkbtn').on('click',function() {
    alert('hello');
    $.get('check/check.html', function(resp) {
      showcheckpage(resp);
    });
  });

  // $('.right').on('click','td',function(resp) {
  //   var temp = $(this).eq(0).text();
  // });
});


function showcheckpage(str) {
  $('.right').empty();
  str.map(function(val) {
    var temp = val.paper_name;
    $('.right').append("<tr><td><a href=check/page?name="+temp+">" +val.paper_name+'</a></td><tr>');
  });
}

function showonepage(str) {
  $('.right').empty();
  str.map(function(val) {
    $('.right').append();
  });
}
