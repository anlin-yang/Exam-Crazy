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
      $('#snoTip').html('学号不能为空！');
    } else if (isNaN(info.id)) {
      $('#snoTip').html('学号只能为数字！');
    } else if (info.id.length !== 8) {
      $('#snoTip').html('请输入8位学号！');
    } else {
      tempxh = 1;
      $('#snoTip').html('');
    }
    if (info.name.length <= 0) {
      $('#nameTip').html('请输入姓名！');
    } else {
      tempxm = 1;
      $('#nameTip').html('');
    }
    if (info.password.length === 0) {
      $('#passwordTip').html('请设置密码！');
    } else if ((info.password.length < 6 || info.password.length > 12)) {
      $('#passwordTip').html('密码长度应在6～12位之间!');
    } else {
      tempmm = 1;
      $('#passwordTip').html('');
    }
    if (tempmm === 1) {
      if (info.surePassword.length === 0) {
        $('#confirmTip').html('未设置确认密码！');
      } else if (info.password !== info.surePassword) {
        $('#confirmTip').html('请与设置密码保持一致！');
      } else {
        tempsmm = 1;
        $('#confirmTip').html('');
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
            $('#registed').html('该学号已被注册！！！');
          }
          if (result.status === STATUS.DATA_SUCCESS) {
            alert('已注册成功，点击确定后进行登录');
            location.href = "/";
          }
        }
      });
    }
  });
});
