var db = require('./../db');
var format = require('util').format;

exports.list = function(callback){
	console.log('Fetching list of wines');
	var collection = db.getCollection('wines');
	collection.find().toArray(function(err, results) {
		console.log('Found ' + results.length + ' wines');
		callback(results);
	});
};

exports.insert = function(wine, callback){
	console.log('Inserting wine');
	var collection = db.getCollection('wines');

	collection.insert(wine, function(err, result){

		if (err){
			callback(err, null);
		}
		else {
			collection.count(function(err, count) {
	        	console.log(format("count of wines = %s", count));
	      	});
	      	callback(null, result);
		}
	});
};