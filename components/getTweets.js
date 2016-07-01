
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
    }).done(function(results){
      console.log("after ajax " + results);
      console.log(results.length);
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
          <p id="keywordGet"><img id ="bulldog2" src="./images/LilDoggo.png"/>
            Gritter fetched {this.state.number} Tweets with keyword "{decodeURIComponent(this.state.keyword)}"</p>
          <div className="keywordInput">
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
