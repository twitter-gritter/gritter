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

router.route('/:queryStr') //defines an api endpoint :(colon) signifies a parameter
  .get(function(req, res){

    console.log('PARAMETERS: ' + req.params);
    console.log(req.params);

    var str = req.params.queryStr;
    console.log('THIS IS THE STRING: ' + str);

    var pos = str.indexOf("count");

    var query = str.slice(0, (pos - 2));
    console.log('QUERY: ' + query);

    var num = Number(str.slice((pos + 7), str.length));
    console.log('THIS IS THE NUMBER:' + num);


    T.get('search/tweets', { q: query, count: num }, function(err, data, response) {


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
