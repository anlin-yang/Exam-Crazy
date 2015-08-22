$('body').on('click', "#button", function() {

  var username = $("#username").val();
  var password = $("#password").val();

  if (username.length !== 8 || isNaN(parseInt(username))) {
    $(".un-error").html("请输入8位数字的学号~");
  } else if (password.length === 0) {
    $(".un-error").html("");
    $(".pw-error").html("请输入密码～");
  } else if (password.length < 6 || password.length > 12) {
    $(".un-error").html("");
    $(".pw-error").html("用户名不存在或密码不正确哦～");
  } else {
    $(".pw-error").html("");
    $.ajax({
      type: 'POST',
      url: '/login',
      data: {
        un: username,
        pw: password
      },
      success: function(result) {
        if (result.status === 200) {
          alert("OK!");
        }
        else {
          $(".pw-error").html("用户名不存在或密码不正确哦～");
        }
      }
    });
  }
});
