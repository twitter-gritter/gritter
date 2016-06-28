var React = require('react');
var AddRemoveLayout = require('./addRemoveLayout.js');

var AddRemoveGrid = React.createClass({
  render: function(){
    return (
      <AddRemoveLayout tweets={this.props.tweets}/>
    )
  }
});

module.exports = AddRemoveGrid;
