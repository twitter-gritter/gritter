// GetTweets
//  Grid
//    Cards

var React = require('react');
var ReactGridLayout = require('react-grid-layout');

var Cards = require('./cards.js');
var Grid = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    console.log(this.props.tweets);
    // var tweets = this.props.tweets.map(function(item){
    //   console.log(item)
    // });
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={"a"}>Boom!</div>
        <div key={"b"}>Woosh!</div>
        <div key={"c"}>We're doomed!</div>
      </ReactGridLayout>
    )
  }
});
module.exports = Grid;
