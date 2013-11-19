
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , sass = require('node-sass')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 7070);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(
   sass.middleware({
     src: __dirname + '/public', //where the sass files are 
     dest: __dirname + '/public', //where css should go
     debug: true // obvious
   })
 );
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

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
