var data = require('../data.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = data.users;
	//res.send('Your random palette is called: ' + randomPalette['title']);
	res.json(randomPalette);
}