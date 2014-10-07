var wineRepository = require('./wine-repository');

exports.insert = function(req, res){
	var postdata = req.body;
	if(postdata.content == undefined){
		res.send(500, 'Ingen innhold definert');
			return;
	}
	wineRepository.insert(JSON.parse(postdata.content), function(err, result){
		if (err){
			res.send(500, err);
			return;
		}

		else {
			res.redirect('/');
		}
	});
}