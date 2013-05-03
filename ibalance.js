
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , oldUmask = process.umask(777);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/img/favicon.ico', { maxAge: 2592000000 }));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/technology', routes.technology);
app.get('/contact', routes.contact);
app.get('/jobs', routes.jobs);
app.get('/coworking', routes.coworking);



app.get('/users', user.list);
/*
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	app.listen(8081, function() {
	  process.umask(oldUmask);
	});
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
	app.listen('/tmp/bmw_node.socket', function() {
	  process.umask(oldUmask);
	});
});
*/


http.createServer(app).listen('/tmp/ibalance_node.socket', function(){
	process.umask(oldUmask);
  console.log('Express server listening on port ' + app.get('port'));
});


