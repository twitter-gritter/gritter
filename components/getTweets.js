
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
var TwitterCard = require('./twitterCard');
var SearchBar = require('./searchBar.js');


var GetTweets = React.createClass({


  getInitialState: function(){
    return{
      tweets: [],
      keyword: 'Reactjs'
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
      self.setState({tweets: data})
    })

  },
  componentDidMount: function(){
    this.loadTweetsFromServer(this.state.keyword);
  },
  render: function () {
  return (
    <div className = "container searchContainer">
      <div className="keywordInput">
        <p> Search by keyword: {this.state.keyword}</p>
        <SearchBar onKeywordSubmit={this.onKeywordSubmit}/>
        <div className="twitterGrid">
          <TwitterCard tweetsArr={this.state.tweets} />
        </div>
      </div>
    </div>
    )
  }
});

module.exports = GetTweets;

/*ReactDOM.render(<TwitterApp url = "/tweets/"/>,
  document.getElementById ('app'));*/

/*var React = require('react');
var TwitterCard = require('./twitterCard');


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
          <TwitterCard tweetsArr={this.state.tweets} />
      </div>
    )
  }
});
module.exports = GetTweets;
*/
