
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var data = require('./routes/data');
var signup = require('./routes/signup');
var my_profile = require('./routes/my_profile');
var my_lunches = require('./routes/my_lunches');
var edit_profile = require('./routes/edit_profile');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.getIndex);
app.get('/home', home.getHome);
app.get('/data', data.randomPalette);
app.get('/signup', signup.view);
app.get('/my_profile', my_profile.get_my_profile);
app.get('/my_lunches', index.my_lunches);
app.get('/confirmation', index.confirmation);
app.get('/current_room', index.current_room);
app.get('/logout', index.logout);
app.get('/edit_profile', edit_profile.get);


app.post('/', home.view);
app.post('/index', home.view);
app.post('/home', home.receive);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
