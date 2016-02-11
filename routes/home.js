var data = require("../data.json");

exports.view = function(req, res){
  res.render('home');
};

exports.receive = function(req, res){
	//console.log(req);
	if(req != null){
		var user = req.body.user;
		var pass = req.body.password;
		var flag = false;

		for(var i = 0; i < data["users"].length; i++){
			if(data["users"][i].email == user && data["users"][i].password == pass){
				flag = true;
			}
		}
		if (flag) {
			res.render('home');
		} else {
			res.render('index');
		}
	}
}