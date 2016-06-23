
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Twit = require('twit');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));

require('dotenv').config();


var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

app.get('/twitter', function(req, res) {

	T.get('search/tweets', { q: '#SFGiants since:2016-05-30', count: 10 }, function(err, data, response) {
		if (err) {
			console.log('There was an error retrieving requested data. Msg from: server.js');
		}
	  res.send(data);
	});
});





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

mongoose.connect("mongodb://localhost:27017/gritter");
mongoose.connection.once('open', function(){
	console.log("Connected to your database.");
});

app.get('/', function(req, res){
	res.render('index');
});

app.listen(7000, function(){
	console.log("It's alive on port 7000");
});
