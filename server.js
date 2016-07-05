
var express = require('express');
//var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Twit = require('twit');
var config = require('./config.js');
var tweetRouter = require('./tweetRouter.js');
var session = require('express-session');
var passport = require('passport');

require('./passport/passport.js')(passport);

var app = express();
// For login use
//app.use(session({ secret: 'gritter tamer', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));

var router = express.Router();
router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

// Define Express Routes
app.use('/tweets', tweetRouter);
/*app.use('/timeline', userTimelineRouter);
app.use('/funny', funnyTweetRouter);
app.use('/trending', trendingTweetRouter);*/

// Login Information
app.post('/login', passport.authenticate('local-signup'), function(req,res){
  res.redirect('/');
});

//LogOut

app.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
})

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}

mongoose.connect(

  config.mongo_uri
//  "mongodb://localhost:27017/gritter"
);
mongoose.connection.once('open', function(){
	console.log("Connected to your database.");
});

app.get('/', function(req, res){
	res.render('index');
});

app.listen(config.port, function(){
	console.log("It's alive on port " + config.port);
});
