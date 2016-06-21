var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tweets');
var tweetRouter = require('./routes/tweets');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;
var router = express.Router();


router.use(function(req, res, next){
	console.log('Something is happening');
	next();
});


app.get('/', function(req, res){
	res.render('index')
});



app.use('/api/tweets', tweetRouter);




app.listen(port);
console.log("Cash money on port " + port);
