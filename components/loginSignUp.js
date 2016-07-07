var React = require('react');
var Logout = require('./logout.js');

var LoginSignUp = React.createClass({
  render: function(){
    return(
      <div>
      <h2>New Users</h2>
        <form id="login"  className="form-group loginForm" action = '/login' method = 'POST'>
          <li>Welcome:<input type="text" className = "form-control" id="user" name="firstName" placeholder="First Name" /></li>
          <li><input type="text" className = "form-control" id="user" name="lastName" placeholder="Last Name" /></li>
          <li><input type="username" className = "form-control" id="user" name="email" placeholder="Email" /></li>
          <li><input type="password" className = "form-control" name="password" id="user" placeholder="Password" /></li>
          <li><button id="user" className="btn btn-success loginButton">Sign Up</button></li>
        </form>
      </div>
    )
  }
});

module.exports = LoginSignUp;
