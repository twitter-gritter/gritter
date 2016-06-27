var React = require('react');
var LoginForm = require('./loginForm.js');

var Background = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <h1 id="title">Gritter</h1>
          <div className = "logo">
          <LoginForm />
            <img src="./images/bulldog.jpg" />
            <div className = "social">
              <ul className = "social-links">
              <li className="github"><i className="fa fa-github-square" aria-hidden="true"></i></li>
              <li className="twitter"><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
              <li className="facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
              </ul>
            </div>
          </div>
        </header>
        <hr id="break"></hr>
        <div className="row">
          <div className="container searchContainer">
            <div className="keywordInput">
              <input type="text" id="inputKeyword" placeholder="search"/>
              <div className = "searchDiv">
                <button className = "btn searchButton"><span class="glyphicon glyphicon-search" aria-hidden="true">></span></button>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    )
  }
});

module.exports = Background;
