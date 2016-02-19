var data = require("../data.json");
var session = require("../session.json");
var fs = require('fs');

exports.getHome = function(req, res){
	var session = require("../session.json");
	res.render('home', {
		'first' : session["firstName"],
		'last' : session["lastName"]
	})
}

exports.view = function(req, res){
	var first = req.body.firstname;
	var last = req.body.lastname;
	var email = req.body.email;
	var password = req.body.pass;
	var mbti = req.body.MBTI;
	var cpass = req.body.cpass;
	var today = new Date();
	var startDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

	if (signupChecks()) {

		data["users"].push({
			"email" : email,
	        "userName": "",
	        "firstName": first,
	        "lastName": last,
	        "hobbies": [],
	        "password" : password,
	        "myers-briggs-type": mbti,
	        "socionics-type": "",
	        "favorite-lunch-spots": "",
	        "join-date" : startDate,
	        "mugshot" : ""
	   	});

		fs.writeFile("data.json", JSON.stringify(data));
		fs.writeFile("session.json", JSON.stringify(
			{
		        "firstName": first,
		        "lastName": last,
				"email" : email
			}
		));

		res.render('home', {
			'first' : first,
			'last' : last
		});
	}
};

function signupChecks() {
	return true;
}

/* when the user clicks "sign in". */
exports.receive = function(req, res){
	//console.log(req);
	if(req != null){
		var user = req.body.user;
		var pass = req.body.password;
		var flag = false;
		var first = "";
		var last = "";

		for(var i = 0; i < data["users"].length; i++){
			if(data["users"][i].email == user && data["users"][i].password == pass){
				first = data["users"][i].firstName;
				last = data["users"][i].lastName;
				flag = true;
			}
		}
		if (flag) {
			fs.writeFile("session.json", JSON.stringify(
				{
			        "firstName": first,
			        "lastName": last,
				}
			));
			res.render('home', {
				'first' : first,
				'last' : last
			});
		} else {
			res.render('index');
		}
	}
}