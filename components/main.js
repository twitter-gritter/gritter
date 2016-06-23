
var React = require('react');
var MyGrid = require('./grid.js');
var AllTweetsData = require('./allTweetsData.js');
var TwitterCard = require('./twitterCard.js');


var GetTweets = require('./getTweets.js');
var Main = React.createClass({
  render:function(){
    return (
      <div><h1>You found the main page!</h1>
        <h1>Gritter</h1>
        {this.props.children}
        <AllTweetsData />
      </div>
    )
  }
})

module.exports = Main;
