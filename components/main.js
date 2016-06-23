<<<<<<< HEAD
=======
//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid
>>>>>>> 4a785b8f768975eab1a2878c8143afd07d2ae6ac

var React = require('react');
var GetTweets = require('./getTweets.js');

var Main = React.createClass({
  render:function(){
    return (
      <div><h1>You found the main page!</h1>
      {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
