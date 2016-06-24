var React = require('react');

var LoginForm = React.createClass({
  render: function(){
    return(
      <div>
        <div id="dropdown" className = "dropdown loginDropdown">
        <button className ="btn btn-success dropdown-toggle" id="dropdown-button" type="button" data-toggle="dropdown">Sign Up/Login<span className="caret"></span></button>
        <ul className="dropdown-menu dropdown-menu-right" id="logInfo">
        <h2>Login or Sign Up Below</h2>
        <hr></hr>
        <h2>New Users </h2>
            <form  id="login" className="form-group loginForm" action = '/login' method = 'POST'>
              <li><input type="text" className = "form-control" id="user" name="firstName" placeholder="First Name" /></li>
              <li><input type="text" className = "form-control" id="user" name="lastName" placeholder="Last Name" /></li>
              <li><input type="username" className = "form-control" id="user" name="email" placeholder="Email" /></li>
              <li><input type="password" className = "form-control" name="password" id="user" placeholder="Password" /></li>
              <li><button id="user" className="btn btn-success loginButton">Sign Up</button></li>
            </form>
            <h2>Already signed up?</h2>
            <form  id="login" className="form-group loginForm" action = '/login' method = 'POST'>
              <li><input type="username" className = "form-control" id="user" name="email" placeholder="Email" /></li>
              <li><input type="password" className = "form-control" name="password" id="user" placeholder="password" /></li>
              <li><button id="user" className="btn btn-success loginButton">Login</button></li>
            </form>

            <form className ="form-group" action="/logout" method="GET">
              <li><button id="logoutButton" className="btn btn-warning">Log Out</button></li>
            </form>
          </ul>
        </div>
      </div>
    )
  }
});


module.exports = LoginForm;
