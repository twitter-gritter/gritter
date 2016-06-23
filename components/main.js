//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid
var React = require('react');
var MyGrid = require('./grid.js');
var AllTweetsData = require('./allTweetsData.js');
var TwitterCard = require('./twitterCard.js');
var LoginForm = require('./loginForm.js');



var React = require('react');
var GetTweets = require('./getTweets.js');

var Main = React.createClass({
  render:function(){
    return (
      <div>
      <LoginForm />
      <h1>You found the main page!</h1>
        <h1>Gritter</h1>
        {this.props.children}
      <div><h1>You found the main page!</h1>
      {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
