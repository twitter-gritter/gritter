var React = require('react');

var LoginData = React.createClass({
  render: function(){
    return(
      <div>
        <a href="/auth/twitter">Sign in with Twitter</a>
      </div>
    )
  }
});

module.exports = LoginData;
