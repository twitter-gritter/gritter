var React = require('react');

var ClearButton = React.createClass({
  render: function(){
    return(
      <button onClick={this.props.clearTweets.bind(null)}>Clear Tweets</button>
    )
  }
})

module.exports = ClearButton;
