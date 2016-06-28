require('dotenv').config();
var express = require('express');
var router = express.Router();
var Twit = require('twit');

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

router.route('/:keyword') //defines an api endpoint :(colon) signifies a parameter
  .get(function(req, res){
    var keyword = req.params.keyword;
/*    var endpoint = 'search/tweets';

    req.params.endpoint;  Endpoints: [ 'statuses/retweets_of_me',
    'statuses/user_timeline', 'statuses/home_timeline', 'search/tweets', followers/ids]*/
    //search/tweets = twitters api endpoint
    T.get('search/tweets', { q: keyword + ' since:2016-01-30', count: 15 }, function(err, data, response) {


      var tweetArr = data.statuses.map(function(tweet){

        return {
          key: tweet.id,
          text: tweet.text,
          screen_name: tweet.user.screen_name,
          created_at: tweet.created_at,
          profile_img: tweet.user.profile_image_url,
          }
      });
        res.json(tweetArr);
        console.log(tweetArr);
    })
  });


module.exports = router;
