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
  makeLayout(){
    var p = this.props;
    return _.map(p.tweets, function(tweet, i){
      return {
        x: i * 2 % 12, y: Math.floor(i / 6), w:4, h:5, i:tweet.id.toString()
      };
    })
  },
  makeTweetCards(){
    var layout = this.state.layout;
    //this.setState({layout:layout})
    return _.map(layout, function(l){
      return (
        <div key={l.i} _grid={l}>
          <div>{l.i}</div>
        </div>
      )
    })
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
        <div id="twitterLogo"><TwitterLogo /></div>
        <img id="tweetImage" src={el.profile_img}/>
        <h4 id="screenName">{el.screen_name}:</h4>
        <h5 id="tweetFont">"{el.text}..."</h5>
        <div onClick= {this.props.removeTweet.bind(null, el.id)}>
          <CircleEx />
        </div>



      </div>
    )
  },
  componentDidMount(){
    var layout = this.makeLayout();
    this.setState({layout:layout})
    console.log(layout)
  },
  render: function() {
    return (
      <ReactGridLayout  onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange} {...this.props} >
          {this.makeTweetCards()}
      </ReactGridLayout>
    )
  }
});
module.exports = Grid;
