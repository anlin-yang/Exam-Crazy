var express = require('express');
var hbs = require('express-hbs');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var login = require('./routes/login.js');

var app = express();
var submit = require('./routes/submit.js');

app.use('/submit', submit);

var check = require('./routes/check.js');

app.use('/routes/check.js',check);
app.use('/routes/submit.js', submit);
app.use(express.static('migrations'));

app.use(express.static('bower_components/'));
app.use(express.static('public/'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/", login);

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.engine('html', hbs.__express);

app.use("/", login);

app.listen(3000);
console.log("Listening on port 3000:http://localhost:3000");
