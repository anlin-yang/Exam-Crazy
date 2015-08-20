var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(express.static('bower_components/'));
app.use(express.static('public/'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000);
console.log("Listening on port 3000:http://localhost:3000");
