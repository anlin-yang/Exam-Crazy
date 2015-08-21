var express = require('express');
var hbs = require('express-hbs');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var login = require('./routes/login.js');
var register = require('./routes/register.js');
var check = require('./routes/check.js');
var submit = require('./routes/submit.js');
var app = express();

app.use(express.static('bower_components/'));
app.use(express.static('public/'));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use("/", login);
app.use('/register',register);
app.use('/submit', submit);
app.use('/check',check);
app.use('/submit', submit);
app.use('/check',check);
app.use('/submit', submit);


app.listen(3000);
console.log("Listening on port 3000:http://localhost:3000");
