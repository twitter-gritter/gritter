var React = require('react');

var LoginData = React.createClass({
  getInitialState: function(){
    return {
      login: "Login w/ Twitter"
        }
  },
  _LoadUserFromServer: function(){
    var self = this;
    $.ajax({
      method:"GET",
      dataType: "json",
      url:"/profile"
    }).done(function(data){
      console.log(data);
      self.setState({ login:"Welcome @" + data.username })
    });
  },
  componentDidMount: function(){
    this._LoadUserFromServer();
},
  render: function(){
    return(
      <div>
        <button id="loginButton" className="btn"><a id="welcome" href="/auth/twitter">{this.state.login}</a></button>
      </div>
    )
  }
});

module.exports = LoginData;
