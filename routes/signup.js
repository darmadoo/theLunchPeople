
exports.view = function(req, res){
	console.log(req.query.name);
	res.render('signup');
};
