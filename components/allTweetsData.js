// var React = require('react');
// var GetTweets = require('./getTweets.js');
//
// var AllTweetsData = React.createClass({
//   getInitialState: function(){
//     return {
//       tweets: []
//     }
//   },
//
//   getAllTweets: function(){
//     var self = this;
//     $.ajax({
//       method: 'GET',
//       url: '/twitter'
//     }).then(function(data){
//       for(var i = 0; i< data.statuses.length; i++){
//         console.log(data.statuses[i].text);
//       }
//       self.setState({ tweets: data})
//     })
//   },
//
//   componentDidMount: function(){
//       this.getAllTweets();
//   },
//
//   render: function(){
//     return (
//       <div>
//
//       </div>
//     )
//   }
//
// });
//
// module.exports = AllTweetsData;
