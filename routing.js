var wineView = require('./lib/wine-view');

exports.setup = function (app) {
	app.get('/', wineView.list);

	app.get('/new', wineView.newWine);

	app.post('/new', function(req, res) {	  
	  res.redirect('/');
	});
};