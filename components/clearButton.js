var React = require('react');

var ClearButton = React.createClass({
  render: function(){
    return(
      <button id="clear" onClick={this.props.clearTweets}>Clear Tweets</button>

    )
  }
})

module.exports = ClearButton;
