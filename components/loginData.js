var React = require('react');

var LoginData = React.createClass({
  render: function(){
    return(
      <div>
        <form action = "/auth/twitter/" method="GET">
        <input type="username" />
        <input type="password" />
        <button className ="btn">Login with Twitter!</button>
        </form>
      </div>
    )
  }
});

module.exports = LoginData;
