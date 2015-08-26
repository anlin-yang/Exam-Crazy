$(function() {
  var id = $('#id')[0];
  var password = $('#password')[0];
  var surePassword = $('#confirm')[0];
  var name = $('#name')[0];
  var classes = $("[name='classes']");
  var allGender = $("[name='gender']");

  $('#button').on('click', function(evt) {
    evt.preventDefault();
    var gender;
    for (var x = 0; x < allGender.length; x++) {
      if (allGender[x].checked) {
        gender = allGender[x].value;
        break;
      }
    }

    var classe;
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].selected) {
        classe = classes[i].value;
        break;
      }
    }

    var info = {
      id: id.value,
      name: name.value,
      gender: gender,
      class: classe,
      password: password.value,
      surePassword: surePassword.value
    };

    var tempxh = 0;
    var tempxm = 0;
    var tempmm = 0;
    var tempsmm = 0;
    if (info.id.length === 0) {
      $('#snoHint').html(registerStatus.STUDENT_ID_IS_NULL);
    } else if (isNaN(info.id)) {
      $('#snoHint').html(registerStatus.STUDENT_ID_IS_NUN);
    } else if (info.id.length !== 8) {
      $('#snoHint').html(registerStatus.STUDENT_ID_LENGTH_NOT_STANDARD);
    } else {
      tempxh = 1;
      $('#snoHint').html('');
    }
    if (info.name.length <= 0) {
      $('#nameHint').html(registerStatus.STUDENT_NAME_IS_NULL);
    } else {
      tempxm = 1;
      $('#nameHint').html('');
    }
    if (info.password.length === 0) {
      $('#passwordHint').html(registerStatus.STUDNET_PASSWORD_IS_NULL);
    } else if ((info.password.length < 6 || info.password.length > 12)) {
      $('#passwordHint').html(registerStatus.STUDENT_PASSWORD_LENGTH_NOT_STANDARD);
    } else {
      tempmm = 1;
      $('#passwordHint').html('');
    }
    if (tempmm === 1) {
      if (info.surePassword.length === 0) {
        $('#confirmHint').html(registerStatus.STUDENT_SURE_PASSWORD_IS_NULL);
      } else if (info.password !== info.surePassword) {
        $('#confirmHint').html(registerStatus.STUDENT_SURE_PASSWORD_NOT_SAME);
      } else {
        tempsmm = 1;
        $('#confirmHint').html('');
      }
    }

    if (tempxh === 1 && tempxm === 1 && tempmm === 1 && tempsmm === 1) {
      $.ajax({
        type: 'POST',
        url: '/studentRegister/register',
        data: {
          info: info
        },
        success: function(result) {
          if(result.status === STATUS.INS_ERROR) {
            return result.status;
          }
          if (result.status === STATUS.PARAM_ERROR) {
            $('#registed').html(registerStatus.STUDENT_ID_IS_REGISTED);
          }
          if (result.status === STATUS.DATA_SUCCESS) {
            alert(registerStatus.STUDENT_ID_REGISTE_SUCCESS);
            location.href = "/";
          }
        }
      });
    }
  });
});
