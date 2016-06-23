//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid
//var LoginForm = require('./loginForm.js');

var React = require('react');
var MyGrid = require('./grid.js');
var TwitterCard = require('./twitterCard.js');
var LoginForm = require('./loginForm.js');



//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid
var React = require('react');
var GetTweets = require('./getTweets.js');
var Main = React.createClass({
  render:function(){
    return (
      <div>
      <LoginForm />
      {this.props.children}
      <GetTweets />
      </div>
    )
  }
})
module.exports = Main;
