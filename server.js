var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var consolidate = require('consolidate');


var db = require('./lib/db');
var routing = require('./routing');
var config = require('./lib/config')();

var app = express();

app.use(bodyParser.json());

app.engine("html", consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(__dirname + '/public'));

routing.setup(app);


db.connect(config.db, function(err){
	if (err) {
    	console.log(err);
  	}

  	console.log('Connected to ' + config.db.url);

	var server = app.listen(config.port);
	console.log('Express app listening at port '+ server.address().port);
});