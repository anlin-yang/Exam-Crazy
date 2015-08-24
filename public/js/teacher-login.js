$(function() {
  $("#teacherLoginId").on('click', function() {
    var username = $("#inputUsername").val();
    var password = $("#inputPassword").val();
    $.ajax({
      type: 'POST',
      url: '/teacherLogin/teacherLoginCheck',
      data: {
        un: username,
        pw: password
      },
      success: function(result) {
        if (result.status === 200) {
          $.cookie('username', username, { expires: 1, path: '/' });
          // $.cookie('username', username, {
          //   expires: 1,
          //   path: '/'
          // });
          // $.cookie('password', password, {
          //   expires: 1,
          //   path: '/'
          // });
          alert("hello");
        } else {
          $(".error")[0].innerHTML = "用户名不存在或密码不正确哦";
          $("#inputUsername").val("");
          $("#inputPassword").val("");
        }
      }
    });
  });
});
