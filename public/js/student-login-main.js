$('body').on('click', "#login-button", function() {

  var studentId = $("#student-id").val();
  var password = $("#password").val();

  if (studentId.length !== 8 || isNaN(studentId)) {
    $(".input-error").html("请输入8位数字的学号");
  } else if (password.length === 0) {
    $(".input-error").html("请输入密码");
  } else if (password.length < 6 || password.length > 12) {
    $(".input-error").html("用户名不存在或密码不正确");
    $("#password").val("");
  } else {
    $(".input-error").html("");
    $.ajax({
      type: 'POST',
      url: '/studentLogin',
      data: {
        studentId: studentId,
        password: password
      },
      success: function(result) {
        if (result.status === 200) {
          $.cookie('studentId', studentId, {expires: 1, path: '/' });
          $.cookie('password', password, {expires: 1, path: '/' });
          location.href = "/studentHome";
        }
        else {
          $(".input-error").html("用户名不存在或密码不正确");
          $("#password").val("");
        }
      }
    });
  }
});
