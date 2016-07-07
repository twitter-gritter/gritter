var React = require('react');

var LoginAttempt = React.createClass({

  render: function(){
    return(
      <div>
      <h2>Already signed up?</h2>
      <form  id="login" className="form-group loginForm" action = '/login' method = 'POST'>
        <li><input type="username" className = "form-control" id="user" name="email" placeholder="Email" /></li>
        <li><input type="password" className = "form-control" name="password" id="user" placeholder="password" /></li>
        <li><button id="user" className="btn btn-success loginButton">Login</button></li>
      </form>
      </div>
    )
  }
});

module.exports = LoginAttempt;
