
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./route')
  , http = require('http')
  , path = require('path')
  , uedConfig = require('./uedConfig');

uedConfig.upload_dir = uedConfig.upload_dir || path.join(__dirname, 'public', 'user_data', 'images');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.register('.html','ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({
    uploadDir:uedConfig.upload_dir
  }));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
