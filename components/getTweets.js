
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
  onKeywordSubmit: function(newKeyword, newNumber){
    this.setState({keyword: newKeyword});
    this.setState({number: newNumber});
    this.loadTweetsFromServer(newKeyword, newNumber);
  },
  loadTweetsFromServer: function(keyword, number){

    var self = this;
    var queryString = encodeURIComponent(JSON.stringify({search: keyword, count: number}));
    
    $.ajax({
      url: "/tweets/" + queryString,
      method: 'GET'
    }).done(function(results){
      self.setState({tweets: self.state.tweets.concat(results)})
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
    this.loadTweetsFromServer(this.state.keyword, this.state.number);
  },
  render: function () {
    this.addId();

      return (
        <div className = "container">
          <div className="keywordInput">
            <SearchBar onKeywordSubmit={this.onKeywordSubmit}/>
            <p id="keywordGet"><img id ="bulldog2" src="./images/LilDoggo.png"/>
            Gritter fetched {this.state.number} Tweets with keyword "{decodeURIComponent(this.state.keyword)}"</p>
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
