
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
var AddRemoveGrid = require('./addRemoveGrid.js');

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
    }).done(function(data){
      self.setState({tweets: data})
    })
  },
  componentDidMount: function(){
    this.getTweets();
  },
  render: function(){

    return(
      <div>
          {/*<TwitterCard tweetsArr={this.state.tweets} />*/}
          <AddRemoveGrid tweets={this.state.tweets} />
      </div>
    )
  }
});
module.exports = GetTweets;
