exports.setRoutes = function(app) {
  app.use("/", require('./student-login.js'));
  app.use('/studentRegister', require('./student-register.js'));
  app.use('/teacherCheck', require('./teacher-check.js'));
  app.use('/studentSolution', require('./student-solution.js'));
  app.use('/student-answer', require('./student-answer.js'));
  app.use('/teacherLogin', require('./teacher-login.js'));
  app.use('/multiplechoice', require('./multiple-choice'));
  app.use('/singlechoice', require('./single-choice'));
  app.use('/teacher', require('./teacher-paper.js'));
  app.use('/fill',require('./add-fill.js'));
  app.use('/paperList',require('./paper-list.js'));
};
