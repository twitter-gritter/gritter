
// GetTweets
//  Grid
//    Cards
//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid


var React = require('react');
var TwitterCard = require('./twitterCard');


var Grid = require('./grid.js');
var GetTweets = React.createClass({
  getInitialState: function(){
    return {
      tweets: []
    }
  },
  getTweets: function(){
    var self = this;
    $.ajax({
      method: 'GET',
      url: '/twitter'
    }).then(function(data){

      self.setState({tweets:data.statuses});
      url: '/twitter/'
    }).done(function(data){

      self.setState({tweets: data})
      console.log(data);
    })
  },
  componentDidMount: function(){
    this.getTweets();
  },
  render: function(){

    return(
      <div>
        <Grid tweets={this.state.tweets} />
        <h1> This is the get tweets data</h1>
          <TwitterCard tweetsArr={this.state.tweets} />
      </div>
    )
  }
});
module.exports = GetTweets;
