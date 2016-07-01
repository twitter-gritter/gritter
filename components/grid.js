//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//       Grid
var React = require('react');
var ReactGridLayout = require('react-grid-layout').Responsive;
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
      cols: {lg:12, md:10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 30
    }
  },
  makeLayout(){
    var p = this.props;
    return _.map(p.tweets, function(tweet, i){
      console.log(tweet,i)
      return {
        x: i * 2 % 12, y: Math.floor(i / 6), w:4, h:5, i:tweet.id.toString()
      };
    })
  },
  makeTweetCards(){
    var layout = this.makeLayout();
    //this.setState({layout:layout})
    return _.map(layout, function(l){
      return (
        <div key={l.i} _grid={l}>
          <div>{l.i}</div>
        </div>
      )
    })
  },
  toggleStatic(id){

  },
  onBreakpointChange(breakpoint, cols){
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    })
  },
  onLayoutChange: function(layout){
    console.log("layoutchanged")
    this.setState({layout: layout});
    this.props.onLayoutChange(layout)
  },
  createElement(el){
    return(
      <div id="twitCardHolder" key={el.id} _grid={{x:el.x,y:el.y,w:el.w,h:el.h, static:el.static}} >
        <div id="deleteButton" onClick= {this.props.removeTweet.bind(null, el.id)}><CircleEx /></div>
        <div id="lock" onClick={this.props.toggleStatic.bind(null, el.id)}><Lock /></div>
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
