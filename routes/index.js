/*
 * GET home page.
 */
var data = require("../data.json");

exports.view = function(req, res) {
    var first = req.body.firstname;
    var last = req.body.lastname;
    var email = req.body.email;
    var password = req.body.pass;
    var cpass = req.body.cpass;

    if (password != cpass) {
        console.log("GG");
    }

    var newEntry = {
        "email": email,
        "userName": "mrothenbuhler",
        "firstName": first,
        "lastName": last,
        "DOB": "01/03/1994",
        "hobbies": [
            "hearthstone",
            "running",
            "soccer"
        ],
        "password": password
    }

    data["users"].push(newEntry);
    res.render('index');
};

exports.search = function(req, res) {
    res.render('search');
};

exports.my_profile = function(req, res) {
    res.render('my_profile');
}

exports.my_lunches = function(req, res) {
    res.render('my_lunches');
}

exports.confirmation = function(req, res) {
    res.render('confirmation');
}

exports.current_room = function(req, res) {
    res.render('current_room');
}