$(function() {
  var id = $('#id')[0];
  var password = $('#mm')[0];
  var surePassword = $('#sure-mm')[0];
  var name = $('#xm')[0];
  var sclass = $("[name='classes']");
  var sex = $("[name='sex']");

  $('#sub').on('click', function(evt) {
    evt.preventDefault();
    var gender;
    for (var x = 0; x < sex.length; x++) {
      if (sex[x].checked) {
        gender = sex[x].value;
        break;
      }
    }

    var classe;
    for (var i = 0; i < sclass.length; i++) {
      if (sclass[i].selected) {
        classe = sclass[i].value;
        break;
      }
    }

    var infor = {
      id: id.value,
      name: name.value,
      sex: gender,
      classes: classe,
      password: password.value,
      surePassword: surePassword.value
    };

    var tempxh = 0;
    var tempxm = 0;
    var tempmm = 0;
    var tempsmm = 0;
    if (infor.id.length === 0) {
      $('#xh').html('学号不能为空！');
      // tempxh = 1;
    } else if (isNaN(infor.id)) {
      $('#xh').html('学号只能为数字！');
      // tempxh = 1;
    } else if (infor.id.length !== 8) {
      // tempxh = 1;
      $('#xh').html('请输入8位学号！');
    } else {
      tempxh = 1;
      $('#xh').html('');
    }
    if (infor.name.length <= 0) {
      $('#sxm').html('请输入姓名！');
    } else {
      tempxm = 1;
      $('#sxm').html('');
    }
    if (infor.password.length === 0) {
      $('#smm').html('请设置密码！');
    } else if ((infor.password.length < 6 || infor.password.length > 12)) {
      $('#smm').html('密码长度应在6～12位之间!');
    } else {
      tempmm = 1;
      $('#smm').html('');
    }
    if (tempmm === 1) {
      if (infor.surePassword.length === 0) {
        $('#summ').html('未设置确认密码！');
      } else if (infor.password !== infor.surePassword) {
        $('#summ').html('请与设置密码保持一致！');
      } else {
        tempsmm = 1;
        $('#summ').html('');
      }
    }

    if (tempxh === 1 && tempxm === 1 && tempmm === 1 && tempsmm === 1) {
      $.ajax({
        type: 'POST',
        url: '/register/res',
        data: {
          infor: infor
        },
        success: function(result) {
          if (result.status === 400) {
            alert('该学号已经被注册！');
          }
        }
      });
    }

  });

  $("#cancle").on('click', function() {
    $.get('/', function() {});
  });
});
