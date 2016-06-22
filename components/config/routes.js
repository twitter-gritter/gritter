var React = require('react'),
    ReactDom = require('react-dom'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var Main = require('./../main.js'),
    Grid = require('./../grid.js');

ReactDom.render(
  <Router history={hashHistory}>
    <Route path= '/' component={Main}>
      <IndexRoute component={Grid}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
