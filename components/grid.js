//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//       Grid
var React = require('react');
var ReactGridLayout = require('react-grid-layout');
var _ = require('lodash');
var CircleEx = require('react-icons/lib/fa/times-circle.js');
var TwitterLogo = require('react-icons/lib/fa/twitter.js');
var WidthProvider = require('react-grid-layout').WidthProvider;
    ReactGridLayout = WidthProvider(ReactGridLayout);
var Lock = require('react-icons/lib/fa/lock.js');



var TwitterCard = require('./twitterCard.js');

var Grid = React.createClass({
  getDefaultProps(){
    return {
      className: "layout",
      items: 50,
      cols: 12,
      rowHeight: 30,
      layout: []
    }
  },
  onBreakpointChange(breakpoint, cols){
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    })
  },
  onLayoutChange: function(layout){
    this.setState({layout: layout});
  },
  createElement(el){
    return(
      <div id="twitCardHolder" key={el.id} _grid={{x:el.id * 4 % 12,y:Infinity,w:4,h:5}} >
        <div id="deleteButton" onClick= {this.props.removeTweet.bind(null, el.id)}><CircleEx /></div>
        <div id="lock"><Lock /></div>
        <img id="tweetImage" src={el.profile_img}/>
        <div id="twitterLogo"><TwitterLogo /></div>
        <h4 id="screenName">{el.screen_name}:</h4>
        <h5 id="tweetFont">"{el.text}..."</h5>
      </div>
    )
  },
  render: function() {
    return (
      <ReactGridLayout  onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange} {...this.props} >
          {_.map(this.props.tweets, this.createElement)}
      </ReactGridLayout>
    )
  }
});
module.exports = Grid;
