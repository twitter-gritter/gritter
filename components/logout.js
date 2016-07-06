var React = require('react');

var Logout = React.createClass({
  render: function(){
    return(
      <div>
      <form className ="form-group" action="/logout" method="GET">
        <li><button id="logoutButton" className="btn btn-warning">Log Out</button></li>
      </form>
      </div>
    )
  }
});

module.exports = Logout;
