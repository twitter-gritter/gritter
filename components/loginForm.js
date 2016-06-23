var React = require('react');

var LoginForm = React.createClass({
  render: function(){

    return (
      <div>

        <form  id="login" className="form-group loginForm" action = '/login' method = 'POST'>
        <input type="username" className = "form-control email" id="userName" name="email" placeholder="email/username" />
        <input type="password" className = "form-control password" name="password" id="userPassword" placeholder="password" />
        <button id="loginButton" className="btn btn-success">Login</button>
        </form>
        <form className="form-group" action = '/logout' method = 'GET'>
        <button id="logoutButton" className = "btn btn-success">Logout</button>
        </form>
      </div>
    )
  }
});


module.exports = LoginForm;
