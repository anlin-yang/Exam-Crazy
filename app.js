var express = require('express');
var hbs = require('express-hbs');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var studentLogin = require('./routes/student-login.js');
var studentRegister = require('./routes/student-register.js');
var submit = require('./routes/submit.js');
var check = require('./routes/teacher-check.js');
var answer_paper = require('./routes/answer-paper.js');
var teacherLogin = require('./routes/teacher-login.js');
var addsingle = require('./routes/add-single');
var addMultiple = require('./routes/add-multiple');
var teacherPaper=require('./routes/teacher-paper.js');
var app = express();

app.use(express.static('bower_components/'));
app.use(express.static('public/'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use("/", studentLogin);
app.use('/studentRegister', studentRegister);
app.use('/teacher-check', check);
app.use('/submit', submit);
app.use('/answer-paper', answer_paper);
app.use('/teacherLogin', teacherLogin);
app.use('/addsingle',addsingle);
app.use('/addmultiple',addMultiple);
app.use('/teacher',teacherPaper);
app.listen(3000);
console.log("Listening on port 3000:http://localhost:3000");
