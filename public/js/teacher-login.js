$(function() {
  $("#teacherLoginId").on('click', function() {


    console.log(STATUS.DATA_SUCCESS);
    var id = $("#inputUsername").val();
    var password = $("#inputPassword").val();
    if (id.length !== 8 || isNaN(id)) {
      $(".error").html(loginInputStatus.TEACHER_ID_INVALID);
    } else if (password.length === 0) {
      $(".error").html(loginInputStatus.PASSWORD_NULL);
    } else if (password.length < 6 || password.length > 12) {
      $(".error").html(loginInputStatus.TEACHER_ID_OR_PASSWORD_ERROR);
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
            $(".error").html(loginInputStatus.TEACHER_ID_OR_PASSWORD_ERROR);
            $("#inputUsername").val("");
            $("#inputPassword").val("");
          }
        }
      });
    }
  });
});
