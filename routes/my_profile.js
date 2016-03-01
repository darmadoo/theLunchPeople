var data = require("../data.json");

exports.get_my_profile = function(req,res){

  	renderMyProfile(res);
}

exports.receive = function(req,res) {

	processReq(req);
  	renderMyProfile(res);
}

/* FUNCTIONS */

function processReq(req) {
	/*
		//fs.writeFile("session.json", {});
    var mbti = req.body.myersBriggsType;
    var socio = req.body.socionicsType;
    var favoriteLunchSpots = req.body.favoriteLunchSpots;
    var hobbies = req.body.hobbies;

	var data = require("../data.json");
	var currentUserData = getCurrentUserData();
	var fs = require('fs');

    if (mbti != "") {

    }
    if (socio != "") {
    	
    }
    if (favoriteLunchSpots != "") {
    	
    }
    if (hobbies != "") {
    	
    }
    */
}

function renderMyProfile(res) {
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
			ret += "<br>" + i + ".) " + currentUserData["hobbies"][i];
		}
		return ret;
	}
}

function getFavLunchSpots(currentUserData) {
	if (currentUserData["favorite-lunch-spots"] == "") {
		return "";
	} else {
		return currentUserData["favorite-lunch-spots"];
	}
}

function getSocionics(currentUserData) {
	if (currentUserData["socionics-type"] == undefined) {
		return "";
	} else {
		return "Socionics: " + currentUserData["socionics-type"];
	}
}

function getMyersBriggs(currentUserData) {
	if (currentUserData["myers-briggs-type"] == undefined) {
		return "";
	} else {
		return "MBTI: " + currentUserData["myers-briggs-type"];
	}

}

