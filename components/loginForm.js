var React = require('react');

var LoginForm = React.createClass({
  render: function(){
    return(
      <div>
        <div id="dropdown" className = "dropdown loginDropdown">
        <button className ="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Sign Up/Login<span className="caret"></span></button>
        <ul className="dropdown-menu dropdown-menu-right">
            <form  id="login" className="form-group loginForm" action = '/login' method = 'POST'>
            <li><input type="text" className = "form-control" id="userName" name="firstName" placeholder="First Name" /></li>
            <li><input type="text" className = "form-control" id="userName" name="lastName" placeholder="Last Name" /></li>
            <li><input type="username" className = "form-control" id="userName" name="email" placeholder="email/username" /></li>
            <li><input type="password" className = "form-control" name="password" id="userPassword" placeholder="password" /></li>
            <li><button id="loginButton" className="btn btn-success">Sign Up</button></li>
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
