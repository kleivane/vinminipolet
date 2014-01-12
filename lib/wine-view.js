module.exports = {
	newWine: function(req, res){
		res.render('layout', {
		    title: 'Legg inn en ny vin',
		    partials: { content: '_new' }
		  });
	},
	list: function(req, res){
		res.render('layout', {
		    title: 'Vinminipolet',
		    partials: { content: '_list' }
		});
	}
}