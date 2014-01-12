var wineRepository = require('./wine-repository');

exports.insert = function(req, res){
	var wine = req.body;
	wineRepository.insert(wine, function(err, result){
		if (err){
			res.send(500, err);
			return;
		}
		else {
			res.redirect('/');
		}
	});
}