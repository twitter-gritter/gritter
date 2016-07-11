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
          <img id ="bulldog" src="./images/LilDoggo.png" />
          <h1 id="title">Gritter</h1>
          <div className = "logo">
          <LoginForm />
            <div className = "social">
              <ul className = "social-links">
              <li className="github"><a href="https://github.com/twitter-gritter/gritter" target="_blank"><i><FaGithubSquare /></i></a></li>
              <li className="twitter"><a href="https://twitter.com/team_gritter" target="_blank"><i><FaTwitterSquare /></i></a></li>
              <li className="facebook"><a href="https://www.facebook.com/mtcodeschool/" target="_blank"><i><FaFacebookSquare /></i></a></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
  }
});

module.exports = Background;
