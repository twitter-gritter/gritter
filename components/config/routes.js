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


var Main = require('./../main.js');
    

ReactDom.render(
  <Router history={hashHistory}>
    <Route path= '/' component={Main}>
    </Route>

  </Router>,
  document.getElementById('header')
)
