var express = require('express');
var request = require('request');

var port = process.env.PORT || 1339;

var app = express();

app.get('/', function(req, res) {
  res.json("Get ready for vines!");
});

app.listen(port);
