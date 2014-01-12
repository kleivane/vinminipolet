var express = require('express');
var request = require('request');
var path = require('path');
var consolidate = require('consolidate');

var port = process.env.PORT || 1339;

var app = express();

app.engine("html", consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.json("Get ready for vines!");
});

app.get('/new', function(req, res) {
  res.render('layout', {
    title: 'Legg inn en ny vin',
    partials: { content: '_new' }
  });
});

app.listen(port);
