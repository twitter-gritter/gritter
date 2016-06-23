
// GetTweets
//  Grid
//    Cards

var React = require('react');

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
    })
  },
  componentDidMount: function(){
    this.getTweets();
  },
  render: function(){

    return(
      <div>
        <Grid tweets={this.state.tweets} />
      </div>
    )
  }
});
module.exports = GetTweets;
