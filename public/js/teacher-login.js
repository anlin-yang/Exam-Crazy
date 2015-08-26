$(function() {
  $("#teacherLoginId").on('click', function() {
    var id = $("#inputUsername").val();
    var password = $("#inputPassword").val();
    if (id.length !== 8 || isNaN(id)) {
      $(".error").html("请输入8位数字的学号");
    } else if (password.length === 0) {
      $(".error").html("请输入密码");
    } else if (password.length < 6 || password.length > 12) {
      $(".error").html("请输入6~12位密码");
      $("#password").val("");
    } else {
      $.ajax({
        type: 'POST',
        url: '/teacherLogin/teacherAuthority',
        data: {
          id: id,
          password: password
        },
        success: function(result) {
          if (result.status === STATUS.DATA_SUCCESS) {
            location.href = "/";
          } else {
            $(".error").html("对不起，用户名不存在或密码不正确！");
            $("#inputUsername").val("");
            $("#inputPassword").val("");
          }
        }
      });
    }
  });
});
