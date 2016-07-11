var React = require('react');

var LoginData = React.createClass({
  getInitialState: function(){
    return {
      login: 'Login w/ Twitter'    }
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
      self.setState({ login:"Welcome @" + data.username })
    });
  },
  componentDidMount: function(){
    this._LoadUserFromServer();
},
  render: function(){
    return(
      <div>
        <button className="btn"><a id="welcome" href="/auth/twitter">{this.state.login}</a></button>

        {/*<button onClick={this._ClickTest}>Test</button>
        <a href="/auth/twitter">{this.state.login}</a>
        <h2 id="logout"><a href="/logout">{this.state.logout}</a></h2>
        <h1 id="welcome">{this.state.title}</h1>*/}
      </div>
    )
  }
});

module.exports = LoginData;
