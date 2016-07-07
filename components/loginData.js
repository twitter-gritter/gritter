var React = require('react');

var LoginData = React.createClass({
  getInitialState: function(){
    return {
      title: 'Login with Twitter'
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
      self.setState({ title: "Welcome " + data.displayName });
      self.setState({ user: data })
    });
    //this._DisplayingUserData()
  },
  // _DisplayingUserData: function(user){
  //   this.setState({
  //     title: "welcome "
  //   });
  // },
  componentDidMount: function(){
      this._LoadUserFromServer();
  },
  render: function(){
    return(
      <div>
        <a href="/auth/twitter">{this.state.title}</a>
        <button onClick={this._LoadUserFromServer}>Login</button>

      </div>
    )
  }
});

module.exports = LoginData;
