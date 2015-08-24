function TeacherLogin() {

}

TeacherLogin.prototype.getTeacherLogin = function(req, res) {
  res.render('teacher-login');
};

TeacherLogin.prototype.postTeacherAuthority = function(req, res) {
  var id = req.body.id;
  var password = req.body.password;
  models.TeacherInfo.findAll({
    where: {
      id: id,
      password: password
    }
  }).then(function(data) {
    if ((data.length === 0)) {
      res.send({
        status: 404,
        message: {},
        data: {}
      });
      console.log("404");
    } else {
      console.log("200");
      res.send({
        status: 200,
        message: {},
        data: {}
      });
    }
  });
};

module.exports = TeacherLogin;
