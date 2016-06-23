//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid
//var LoginForm = require('./loginForm.js');

var React = require('react');
var LoginForm = require('./loginForm.js');
var GetTweets = require('./getTweets.js');

var Main = React.createClass({
  render:function(){
    return (
      <div>
      <LoginForm />
      <GetTweets />
      </div>
    )
  }
})
module.exports = Main;
