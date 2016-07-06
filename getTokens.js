var React = require('react');

var TwitterTokenStrategy = require('passport-twitter-token');

passport.use(new TwitterTokenStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET
  }, function(token, tokenSecret, profile, done) {
    User.findOrCreate({ twitterId: profile.id }, function (error, user) {
      return done(error, user);
    });
  }
));
