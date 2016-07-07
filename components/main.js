//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid

var React = require('react');
var GetTweets = require('./getTweets.js');
var Background = require('./background.js');



var Main = React.createClass({
  render: function(){
    return (
      <div>
      <Background />
      <GetTweets />
      </div>
    )
  }
});


module.exports = Main;
