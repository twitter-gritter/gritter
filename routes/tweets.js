var express = require('express');
var router = express.Router();
var Twit = require('twit');

var T = new Twit({
	consumer_key: 		'XYtKjiEpOiqOVrjKwpo8sb80C',
	consumer_secret:   	'7pmIRFxN0KemjFYoDNYksd4Eh49GggcofT3zWMKdUgVFbwGnZ8',
  	access_token:        '21715296-YusfOGwuMo5LKmBeYwuL7bOk8NSO1ip0oDBlpa3p4',
  	access_token_secret:  '5v2GrzBXKDA757we0lN52X8tUMhtprRQSmiJokTzHI3T4',
  	timeout_ms:           60*1000,
})

router.route('/:keyword') //defines an api endpoint :(colon) signifies a parameter
	.get(function(req, res){
		var keyword = req.params.keyword;
		//search/tweets = twitters api endpoint
		T.get('search/tweets', { q: keyword + ' since:2011-07-11', count: 10 }, function(err, data, response) {

      var myTweetArr = data.statuses.map(function(tweet){

        return {
  				text: tweet.text,
  				screen_name: tweet.user.screen_name,
  				created_at: tweet.created_at,
  				profile_img: tweet.user.profile_image_url,
  				 }
  		});
  			res.json(myTweetArr)
		})
	});


module.exports = router;
