var express = require('express');
var request = require('request');
var path = require('path');
var consolidate = require('consolidate');

var routing = require('./routing');
var config = require('./lib/config')();

var app = express();

app.use(express.bodyParser());

app.engine("html", consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

routing.setup(app);

app.listen(config.port);
