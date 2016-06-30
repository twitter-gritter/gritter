 
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
      endpoint: 'search/tweets'
    }
  },
  onEndpointSubmit: function(newEndpoint){
    this.setState({endpoint: newEndpoint});
  },
  onKeywordSubmit: function(newKeyword, newEndpoint){
    this.setState({keyword: newKeyword});
    this.loadTweetsFromServer(newKeyword, newEndpoint);
  },
  loadTweetsFromServer: function(keyword, endpoint){
    var self = this;
    $.ajax({
      url: endpoint + keyword,
      method: 'GET',
    }).done(function(data){
      self.setState({tweets: data})
    })

  },
  componentDidMount: function(){
    this.loadTweetsFromServer(this.state.keyword, this.state.endpoint);

  },
  render: function () {
  return (
    <div>
      <p> Search by keyword: {this.state.keyword}</p>
      <SearchBar onKeywordSubmit={this.onKeywordSubmit}/>
      <DropDown onEndpointSubmit={this.onEndpointSubmit}/>
      <TwitterCard tweetsArr={this.state.tweets} />
    </div>
    )
  }
});

module.exports = GetTweets;
