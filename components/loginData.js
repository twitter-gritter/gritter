var React = require('react');

var LoginData = React.createClass({
  getInitialState: function(){
    return {
      title: null,
      login: 'Login w/ Twitter',
      logout: null
    }
  },
  _LoadUserFromServer: function(){
    // var logout = location.reload();
    var self = this;
    $.ajax({
      method:"GET",
      dataType: "json",
      url:"/profile"
    }).done(function(data){
      console.log(data);
      self.setState({ title: "Welcome to Gritter  @" + data.username });
      self.setState({ logout: "logout" });
      self.setState({ login: null });

    });
    //this._DisplayingUserData()
  },
  componentDidMount: function(){
      this._LoadUserFromServer();
  },
  _ReloadPage: function(){
    var reload = location.reload(forceGet);
    this.setState({
      logout: reload
    })
  },
  render: function(){
    return(
      <div>
        <a href="/auth/twitter">{this.state.login}</a>
        <h2 id="logout"><a href="/logout">{this.state.logout}</a></h2>
        <h1 id="welcome">{this.state.title}</h1>
      </div>
    )
  }
});

module.exports = LoginData;
