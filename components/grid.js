var React = require('react');

var Grid = React.createClass({
  render:function(){
    return(
      <div>
        This is the grid
        {this.props.children}
      </div>
    )
  }
})
module.exports = Grid;
