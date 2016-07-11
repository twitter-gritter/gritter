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

 // forward slash defines an api endpoint, :(colon) signifies a parameter
  router.get('/:queryStr', function(req, res){
    //parse the JSON string into a regular object
    var parsed = JSON.parse(req.params.queryStr);

    var query = parsed.search;
    var num = parsed.count;

    T.get('search/tweets', { q: query + ' since:2011-07-11', count: num, lang: 'en'}, function(err, data, response) {
      if (err){
          console.log("Error retrieving data");
      } else if (data === undefined){
          console.log("Error: data is undefined");
      } else {

        var tweetArr = data.statuses.map(function(tweet){

          return {

            key: tweet.id_str,
            text: tweet.text,
            screen_name: tweet.user.screen_name,
            created_at: tweet.created_at,
            profile_img: tweet.user.profile_image_url,
            urls: tweet.entities.urls,
            lock: false
            }
        });


        console.log(tweetArr);
        res.json(tweetArr);
      }
    })
  });


module.exports = router;
