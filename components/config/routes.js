//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid

var React = require('react'),
    ReactDom = require('react-dom'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;


var Main = require('./../main.js'),
    Grid = require('./../grid.js'),
    Tweets = require('./../getTweets.js');

ReactDom.render(
  <Router history={hashHistory}>
    <Route path= '/' component={Main}>
      <IndexRoute component={Tweets}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
