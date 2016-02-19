var data = require("../data.json");

exports.view = function(req, res) {
    res.render('home');
};

exports.receive = function(req, res) {
    //console.log(req);
    if (req != null) {
        var user = req.body.user;
        var pass = req.body.password;
        var flag = false;
        var first = "";
        var last = "";

        for (var i = 0; i < data["users"].length; i++) {
            if (data["users"][i].email == user && data["users"][i].password == pass) {
                first = data["users"][i].firstName;
                last = data["users"][i].lastName;
                flag = true;
            }
        }
        if (flag) {
            data["current"].push(first + " " + last);
            res.render('home', {
                'first': first,
                'last': last
            });
        } else {
            res.render('index');
        }
    }
}