var React = require('react');

var LoginData = React.createClass({
  render: function(){
    return(
      <div>
        <a href="/auth/twitter">Login with Twitter</a>
      </div>
    )
  }
});

module.exports = LoginData;
