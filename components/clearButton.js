var React = require('react');

var ClearButton = React.createClass({
  render: function(){
    return(
      <button onClick={this.props.clearTweets}>Clear Tweets</button>
    )
  }
})

module.exports = ClearButton;
