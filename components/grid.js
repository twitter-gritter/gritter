//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//       Grid
var React = require('react');
var ReactGridLayout = require('react-grid-layout');
var _ = require('lodash');
var CircleEx = require('react-icons/lib/fa/times-circle.js');
var LinkIcon = require('react-icons/lib/fa/chain.js');
var TwitterLogo = require('react-icons/lib/fa/twitter.js');
var WidthProvider = require('react-grid-layout').WidthProvider;
var Lock = require('react-icons/lib/fa/lock.js');
    ReactGridLayout = WidthProvider(ReactGridLayout);
var moment = require('moment');


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
  removeLinks: function(text){
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    //remove strings of text from body of tweet that are urls, i.e. match the RegEx
    return text.replace(urlRegex, ''); 
  },
  findUrls: function(array){
    //if tweet.entities.urls (which is an array) is not empty, i.e. there ARE links...
    if(array[0] !== null && array[0] !== undefined){
      //return object with values for full url and a truncated url
      return {
        url: array[0].expanded_url,
        display_url: array[0].display_url
      }

    } 
      //else return values as empty strings; will not be displayed
      return {
        url: '',
        display_url: ''
      }
  },
  displayLinks: function(links){
    //only display link icon if links exist
    if(links.url.length > 0){
      return(
        <a id="links" target="_blank" href={links.url}><LinkIcon /> {links.display_url}</a>
      )
    }
  },
  createElement(el){

    var date = moment(el.created_at).format('D MMMM YYYY h:mm a');
    var profileLink = "https://twitter.com/" + el.screen_name;
    var body = this.removeLinks(el.text);
    var links = this.findUrls(el.urls);
    return(
      <div id="twitCardHolder" key={el.id} _grid={{x:el.id * 4 % 12,y:Infinity,w:4,h:5,minW:2}} >
        <h5 id="date"> {date} </h5>
        <div id="iconDiv" >
          <div id="lock"><Lock /></div>
          <div id="deleteButton" onClick= {this.props.removeTweet.bind(null, el.id)}><CircleEx /></div>
        </div>
        <a target="_blank" href={profileLink}><img id="profileImage" src={el.profile_img}/></a>
        <h4 id="screenName"><a target="_blank" href={profileLink}>{el.screen_name}:</a></h4>
        <div id="tweetBody"><h5 id="tweetText">"{body}"</h5></div>
        {this.displayLinks(links)}
        <div id="twitterLogo"><a target="_blank" href="https://twitter.com/"><TwitterLogo /></a></div>
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
