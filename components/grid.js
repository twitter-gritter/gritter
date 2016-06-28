//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//       Grid
var React = require('react');
var ReactGridLayout = require('react-grid-layout');
var _ = require('lodash');

var TwitterCard = require('./twitterCard.js');

var Grid = React.createClass({
  getDefaultProps(){
    return{
      className: "layout",
      items: 10,
      cols: 12,
      rowHeight: 30,
      verticalCompact:false
    }
  },
  createElement(el,){
    console.log(el);
    return(
      <div id="gridCardArea" key={el.id} _grid={{x:el.id * 4 % 12,y:Infinity,w:4,h:5}} >
        <img src={el.profile_img}/><h3>{el.screen_name}:</h3>
        <h4>"{el.text}..."</h4>
      </div>
    )
  },
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: "1", x: 0, y: 0, w: 1, h: 2, static: true},
      {i: '2', x: 1, y: 0, w: 3, h: 2, minW: 2, minH: 2},
      {i: '3', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
    <ReactGridLayout  layout={layout} cols={12} rowHeight={30} width={1200}>
        {_.map(this.props.tweets, this.createElement)}
    </ReactGridLayout>
    )
  }
});
module.exports = Grid;
