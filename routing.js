var wineView = require('./lib/wine/wine-view');
var wineResource = require('./lib/wine/wine-resource');

exports.setup = function (app) {
	app.get('/', wineView.list);
	app.get('/new', wineView.newWine);
	app.post('/new', wineResource.insert);
};