$('body').on('click', "#login-button", function() {

  var studentId = $("#student-id").val();
  var password = $("#password").val();

  if (studentId.length !== 8 || isNaN(studentId)) {
    $(".input-error").html(loginInputStatus.STUDENT_ID_INVALID);
  } else if (password.length === 0) {
    $(".input-error").html(loginInputStatus.PASSWORD_NULL);
  } else if (password.length < 6 || password.length > 12) {
    $(".input-error").html(loginInputStatus.STUDENT_ID_OR_PASSWORD_ERROR);
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
        if (result.status === STATUS.DATA_SUCCESS) {
          $.cookie('studentId', studentId, {expires: 1, path: '/' });
          $.cookie('password', password, {expires: 1, path: '/' });
          location.href = "/paperList";
        }
        else {
          $(".input-error").html(loginInputStatus.STUDENT_ID_OR_PASSWORD_ERROR);
          $("#password").val("");
        }
      }
    });
  }
});

