var React = require('react');
var FaSignIn = require('react-icons/lib/fa/sign-in.js');
var LoginSignUp = require('./loginSignup.js');
var LoginAttempt = require('./loginAttempt.js');
var Logout = require('./logout.js');

var LoginForm = React.createClass({
  getInitialState:function(){
    return{
      title:'Login',
      name:''
    }
  },

  _changeToLogout:function(){
    this.setState({
      title:<Logout />,
      name:"hello " + ' mikehohne'
    })
  },
  render: function(){
    return(
      <div>
        <div id="dropdown" className = "dropdown loginDropdown">
        <button onClick={this._changeToLogout} id="dropdown-button" type="button" data-toggle="dropdown">{this.state.title}</button>
        <h1>{this.state.name}</h1>
        <ul className="dropdown-menu dropdown-menu-right" id="logInfo">
          <h2>Login or Sign Up Below</h2>
          <hr></hr>
          <LoginSignUp  />
          <LoginAttempt />
          </ul>
        </div>
      </div>
    )
  }
});


module.exports = LoginForm;
