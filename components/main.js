var React = require('react');
var GetTweets = require('./getTweets.js');
var Main = React.createClass({
  render:function(){
    return (
      <div><h1>You found the main page!</h1>
      {this.props.children}
        <GetTweets />
      </div>
    )
  }
})

module.exports = Main;
