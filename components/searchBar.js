var React = require('react');
var GetTweets = require('./getTweets.js');
var FaArrowRight = require('react-icons/lib/fa/arrow-right.js');



var SearchBar = React.createClass({
	getInitialState: function(){
		return {
			newKeyword: '',
			newNumber: 1
		}
	},
	handleKeywordChange: function(event){
		this.setState({
			newKeyword: event.target.value
		})
	},
	handleNumberChange: function(event){
		this.setState({
			newNumber: event.target.value
		})

	},
	handleFormSubmit: function(event){
		event.preventDefault();
		console.log("handling form submit");

		var newKeyword = this.state.newKeyword.trim();
		newKeyword = encodeURIComponent(newKeyword);

		var newNumber = this.state.newNumber.trim();

		//onKeywordSubmit is defined in getTweets.js
		this.props.onKeywordSubmit(newKeyword, newNumber);
	},
	render: function(){
		return (
			<div>
				<form onSubmit = {this.handleFormSubmit}>

					<input onChange={this.handleKeywordChange}
					 value={this.state.keyword} type="text" autoComplete="off" id="inputKeyword" />

					 <input onChange={this.handleNumberChange}
					 value={this.state.number} type= "number" min="1" max="50" id="inputNumber" />

					 <div>
					<button className="btn searchButton"><FaArrowRight /></button>
					</div>

				</form>
			</div>
			)
	}
});

module.exports = SearchBar;
