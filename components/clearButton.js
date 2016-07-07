var React = require('react');
var CircleEx = require('react-icons/lib/fa/times-circle.js');

var ClearButton = React.createClass({
  render: function(){
    return(
      <button id="clear" onClick={this.props.clearTweets} data-toggle="tooltip" data-placement="left"><CircleEx /></button>
    )
  }
})

module.exports = ClearButton;
