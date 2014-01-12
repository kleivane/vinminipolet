var wineRepository = require('./wine-repository');

module.exports = {
	newWine: function(req, res){
		res.render('layout', {
		    title: 'Legg inn en ny vin',
		    partials: { content: '_new' }
		  });
	},
	list: function(req, res){
		wineRepository.list(function(wines){
			res.render('layout', {
		    title: 'Vinminipolet',
		    wines: wines,
		    partials: { content: '_list' }
		});
	});
	}
}