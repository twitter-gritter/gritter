var React = require('react');

var GetTweets = React.createClass({
  getTweets: function(){
    var self = this;
    $.ajax({
      method: 'GET',
      url: '/twitter'
    }).then(function(data){
      console.log(data);
    })
  },
  componentDidMount: function(){
    this.getTweets();
  },
  render: function(){

    return(
      <div>
      </div>
    )
  }
})
module.exports = GetTweets;
