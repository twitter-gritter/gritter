// GetTweets
//  Grid
//    Cards

var React = require('react');

var Cards = React.createClass({

  render:function(){
    return(
      <div>
        {this.props.tweets.statuses.text}

      </div>
    )
  }
});

module.exports = Cards;
