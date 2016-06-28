var React = require('react');
var LoginForm = require('./loginForm.js');
var SearchBar = require('./searchBar.js');
var GetTweets = require('./getTweets.js');
var FaFacebookSquare = require('react-icons/lib/fa/facebook-square.js');
var FaTwitterSquare = require('react-icons/lib/fa/twitter-square.js');
var FaGithubSquare = require('react-icons/lib/fa/github-square.js');


var Background = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <h1 id="title">Gritter</h1>
          <div className = "logo">
          <LoginForm />
            <img id ="bulldog" src="./images/bulldog.jpg" />
            <div className = "social">
              <ul className = "social-links">
              <li className="github"><i><FaGithubSquare /></i></li>
              <li className="twitter"><i><FaTwitterSquare /></i></li>
              <li className="facebook"><i><FaFacebookSquare /></i></li>
              </ul>
            </div>
            <hr id="break"></hr>
          </div>
        </header>
      </div>
    )
  }
});

module.exports = Background;
