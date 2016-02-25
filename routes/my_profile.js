var data = require("../data.json");

exports.get_my_profile = function(req,res){

	var currentUserData = getCurrentUserData();

  	res.render('my_profile', {
  		'name' : currentUserData["firstName"] + " " + currentUserData["lastName"],
  		'WorkMessage' : "Working at Zillow since " + currentUserData["join-date"],
  		'Hobbies' : getHobbies(currentUserData),
  		'FavLunchSpots' : getFavLunchSpots(currentUserData),
  		'Socionics' : getSocionics(currentUserData),
  		'MyersBriggs' : getMyersBriggs(currentUserData)
  	});
}

exports.receive = function(req,res) {
	/* "userName":"",
		"hobbies":[],
		"myers-briggs-type":"",
		"socionics-type":"",
		"favorite-lunch-spots":"",
		*/
    var user = req.body.user;
    var pass = req.body.password;
}

/* FUNCTIONS */

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

function getHobbies(currentUserData) {
	if (currentUserData["hobbies"].length == 0) {
		return "";
	} else {
		var ret = "Hobbies include ";
		for (var i = 0; i < currentUserData["hobbies"].length; i++) {
			ret += currentUserData["hobbies"] + ", ";
		}
		return ret;
	}
}

function getFavLunchSpots(currentUserData) {
	if (currentUserData["favorite-lunch-spots"] == "") {
		return "";
	} else {
		return "";
	}
}

function getSocionics(currentUserData) {
	if (currentUserData["socionics-type"] == "") {
		return "";
	} else {
		return "Socionics type: " + currentUserData["socionics-type"];
	}
}

function getMyersBriggs(currentUserData) {
	if (currentUserData["myers-briggs-type"] == "") {
		return "";
	} else {
		return "Myers-Briggs type: " + currentUserData["myers-briggs-type"];
	}

}

