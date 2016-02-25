/*
 * GET home page.
 */
var data = require("../data.json");
var session = require("../session.json");
var fs = require('fs');

exports.getIndex = function(req, res){
//	if (session["firstName"]) {
//		res.render('home', {
//			'first' : session["firstName"],
//			'last' : session["lastName"]
//		});
//	} else {
//		res.render('index', {
//			'first' : session["firstName"],
//			'last' : session["lastName"]
//		});
//	}
    res.render('index', {
			'first' : session["firstName"],
			'last' : session["lastName"]
    });
};

exports.logout = function(req, res){
	fs.writeFile("session.json", {});
	res.render('index');
}

exports.search = function(req, res){
  res.render('search');
};

function getCurrentUserData() {
	var data = require("../data.json");
	var session = require("../session.json");
	var firstName = session["firstName"];

	for (var i = 0; i < data["users"].length; i++) {
		if (data["users"][i]["firstName"] == firstName) {
			return data["users"][i];
		}
	}
}

/*
{"userName":"","hobbies":[],"myers-briggs-type":"","socionics-type":"","favorite-lunch-spots":"","join-date":"18/2/2016","mugshot":""}
*/


exports.my_lunches = function(req, res) {
	res.render('my_lunches');
}

exports.confirmation = function(req, res) {
	res.render('confirmation');
}

exports.current_room = function(req, res) {
	res.render('current_room');
}

function signupChecks() {
	return true;
}