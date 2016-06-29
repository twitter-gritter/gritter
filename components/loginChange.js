var React = require('react');
var loginForm = require('loginForm.js');

var LoginChange = React.createClass({
  getInitialState: function(){
    return {Login:false}
  },
  handleLoginChange: function(event){
    this.setState({
      Login: event.target.value
    })
  },
  handleLoginForm : function()
  render: function(){
    return (
      <div>

      </div>
    )
  }
});

module.exports = LoginChange;
