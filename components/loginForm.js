var React = require('react');
var LoginData = require('./loginData.js');


var LoginForm = React.createClass({
  render: function(){
    return(
      <div>
        <LoginData />
      </div>
    )
  }
});


module.exports = LoginForm;
