$(function() {
  $("#teacherLoginId").on('click', function() {
    var id = $("#inputUsername").val();
    var password = $("#inputPassword").val();
    $.ajax({
      type: 'POST',
      url: '/teacherLogin/teacherAuthority',
      data: {
        id: id,
        password: password
      },
      success: function(result) {
        console.log(STATUS.DATA_SUCCESS);
        alert("hello");
        if (result.STATUS === 200) {
          // $.cookie('username', username, {
          //   expires: 1,
          //   path: '/'
          // });
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
