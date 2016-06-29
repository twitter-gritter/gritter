
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

  onKeywordSubmit: function(newKeyword){
    this.setState({keyword: newKeyword});
    this.loadTweetsFromServer(newKeyword);
  },

  loadTweetsFromServer: function(keyword){
    var self = this;
    $.ajax({
      url: "/tweets/" + keyword,
      method: 'GET',
    }).done(function(data){
      self.setState({tweets: self.state.tweets.concat(data)})
    })

  },
  removeTweet: function(id){
    this.setState({tweets: _.reject(this.state.tweets, {id: id})});
  },
  clearTweets: function(){
    this.setState({tweets: []});
  },
  addId: function(){
    for(var i = 0; i <  this.state.tweets.length; i++){
      this.state.tweets[i].id=i;
    }
  },
  componentDidMount: function(){
    this.loadTweetsFromServer(this.state.keyword);

  },
  render: function () {
    this.addId();
      return (
        <div className = "container">
          <div className="keywordInput">
            <p> Search by keyword: {decodeURIComponent(this.state.keyword)}</p>
            <SearchBar onKeywordSubmit={this.onKeywordSubmit}/>
            <ClearButton clearTweets={this.clearTweets}/>
            <div className="tweetGrid">
              <Grid tweets={this.state.tweets} removeTweet={this.removeTweet}/>
            </div>
          </div>
        </div>
        )
      }
});

module.exports = GetTweets;
