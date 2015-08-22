$(function() {
  var id = $('#id')[0];
  var password = $('#mm')[0];
  var surePassword = $('#sure-mm')[0];
  var name = $('#xm')[0];
  var sclass = $("[name='classes']");
  var sex = $("[name='sex']");


  // $('form').submit(function(evt) {
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
    // var tempxh = 0;
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
      $('#xh').html('');
    }
    if (infor.name.length <= 0) {
      $('#sxm').html('请输入姓名！');
    } else {
      $('#sxm').html('');
    }
    if (infor.password.length === 0) {
      $('#smm').html('请设置密码！');
    } else if ((infor.password.length < 6 || infor.password.length > 12)) {
      $('#smm').html('密码长度应在6～12位之间!');
    } else {
      $('#smm').html('');
    }
    var tempsmm = 0;
    if (infor.surePassword.length === 0) {
      $('#summ').html('未设置确认密码！');
    } else if (infor.password !== infor.surePassword) {
      $('#summ').html('请与设置密码保持一致！');
    } else {
      $('#summ').html('');
    }
    // $.get('/ver', {
    //   infor: infor
    // }, function(req, information, res) {
    //   if (req !== true) {
    //     if (req === "学号为空") {
    //       $('#xh').html('学号不能为空！');
    //       //$('#sxm').html('请输入姓名！');
    //       //$('#smm').html('请设置密码！');
    //     }
    //     if(req === "学号应为数字") {
    //       $('#xh').html('学号只能为数字！');
    //       $('#sxm').html('请输入姓名！');
    //       $('#smm').html('请设置密码！');
    //     }
    //     if(req === "8位学号") {
    //       $('#xh').html('请输入8位学号！');
    //       $('#sxm').html('请输入姓名！');
    //       $('#smm').html('请设置密码！');
    //     }
    //     if(req === "已经注册") {
    //       $('#xh').html('该学号已被注册过！');
    //       $('#sxm').html('请输入姓名！');
    //       $('#smm').html('请设置密码！');
    //     }
    //     if(req === "输入姓名") {
    //       $('#xh').html('');
    //       $('#sxm').html('请输入姓名！');
    //       $('#smm').html('请设置密码！');
    //     }
    //     if(req === "密码为空") {
    //       $('#xh').html('');
    //       $('#sxm').html('');
    //       $('#smm').html('请设置密码！');
    //     }
    //     if(req === "密码长度应在6～12位之间") {
    //       $('#xh').html('');
    //       $('#sxm').html('');
    //       $('#smm').html('密码长度应在6～12位之间!');
    //     }
    //     if(req === "确认密码为空") {
    //       $('#xh').html('');
    //       $('#sxm').html('');
    //       $('#smm').html('');
    //       $('#summ').html('未设置确认密码！');
    //     }
    //     if(req === "与设置密码不一致") {
    //       $('#xh').html('');
    //       $('#sxm').html('');
    //       $('#smm').html('');
    //       $('#summ').html('请与设置密码保持一致！');
    //     }
    //   } else {
    //
    //   }
    // res.render('index',{title:'EXAM',info:information});
    // });
  });
  $("#cancle").on('click', function() {
    $.get('/ret', function() {});
  });
  // });
});
