module.exports = {
	newWine: function(req, res){
		res.render('layout', {
		    title: 'Legg inn en ny vin',
		    partials: { content: '_new' }
		  });
	},
	list: function(req, res){
		res.send("There will be wines!");
	}
}