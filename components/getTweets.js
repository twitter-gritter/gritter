
// GetTweets
//  Grid
//    Cards
//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Grid = require('./grid.js');
var SearchBar = require('./searchBar.js');
var ClearButton = require('./clearButton.js');


var GetTweets = React.createClass({


  getInitialState: function(){
    return{
      tweets: [],
      keyword: 'Reactjs',
      number: 4
    }
  },
  
/*  onNumberSubmit: function(newNumber){
    this.setState({number: newNumber})
  },*/
  onKeywordSubmit: function(newKeyword, newNumber){
    console.log("handling keyword submit");
    this.setState({keyword: newKeyword});
    this.setState({number: newNumber});
    this.loadTweetsFromServer(newKeyword, newNumber);
  },
  loadTweetsFromServer: function(keyword, number){
    console.log('before ajax' + keyword + number);
    var self = this;
    number = String(number);

    var queryString = keyword + ' since:2015-01-30, count: ' + number;
    console.log(queryString);

    $.ajax({
      url: "/tweets/" + queryString,
      method: 'GET'
    }).done(function(tweets){
      console.log("after ajax " + tweets);
      _.map(tweets, function(tweet, i){
        tweet.id = i;
        tweet.x = i * 2 % 12;
        tweet.y=Math.floor(i/4);
        tweet.w=4;
        tweet.h=5;
        tweet.static = false;
      })

      self.setState({tweets: self.state.tweets.concat(tweets)})

      // _.map(p.tweets, function(tweet, i){
      //   return {
      //     x: i * 2 % 12, y: Math.floor(i / 6), w:4, h:5, i:tweet.id.toString()
      //   };
    })

  },
  removeTweet: function(id){
    this.setState({tweets: _.reject(this.state.tweets, {id: id})});
  },
  clearTweets: function(){
    this.setState({tweets: []});
  },
  addProps: function(){
    // for(var i = 0; i <  this.state.tweets.length; i++){
    //   this.state.tweets[i].id=i;
    // }
    _.map(this.state.tweets, function(tweet, i){
      tweet.id = i;
      tweet.x = i * 2 % 12;
      tweet.y=Math.floor(i/4);
      tweet.w=4;
      tweet.h=5;
      tweet.static = false;
    })
  },
  toggleStatic: function(i){
    // i = _.findIndex(this.state.tweets, function(i){
    //   return
    // })
    this.state.tweets[i].static = true;
    //console.log(this.state.tweets[i].static);
    this.setState({tweets: this.state.tweets});
  //  this.state.tweets[i].static = !this.state.tweets[i].static;
  //  this.setState({tweets: this.state.tweets[i].h = 12});
  },
  componentDidMount: function(){
    this.loadTweetsFromServer(this.state.keyword, this.state.number);
  },
  render: function () {


      return (
        <div className = "container">
          <div className="keywordInput">
            <p id="keywordGet"> Search by keyword: {decodeURIComponent(this.state.keyword)}</p>
            <SearchBar onKeywordSubmit={this.onKeywordSubmit}/>
            <ClearButton clearTweets={this.clearTweets}/>
            <div className="tweetGrid">
              <Grid tweets={this.state.tweets} toggleStatic={this.toggleStatic} removeTweet={this.removeTweet}/>
            </div>
          </div>
        </div>
    )
  }
});


module.exports = GetTweets;
