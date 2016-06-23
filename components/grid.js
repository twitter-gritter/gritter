//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid
var React = require('react');
var ReactGridLayout = require('react-grid-layout');

var Grid = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 4, minH: 2},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div className="pretty" key={'c'}>
          <img src={this.props.profile_img}/><h3>{this.props.author}:</h3>
          <h4>"{this.props.text}..."</h4>
        </div>

      </ReactGridLayout>
    )
  }
});
module.exports = Grid;
