var React = require('react');
var ReactGridLayout = require('react-grid-layout');
var AddRemoveLayout = require('./addRemoveLayout.js');

var AddRemoveGrid = React.createClass({
  render: function() {
    return (  
          <div>
            <AddRemoveLayout />
          </div>
    )
  }
});