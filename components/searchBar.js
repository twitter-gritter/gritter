var React = require('react');
var GetTweets = require('./getTweets.js');
var FaArrowRight = require('react-icons/lib/fa/arrow-right.js');



var SearchBar = React.createClass({
	getInitialState: function(){
		return {newKeyword: ''}
	},
	handleKeywordChange: function(event){
		this.setState({
			newKeyword: event.target.value
		})
	},
	handleFormSubmit: function(event){
		event.preventDefault();

		var newKeyword = this.state.newKeyword.trim();
		//onKeywordSubmit is defined in getTweets.js
		this.props.onKeywordSubmit(newKeyword);
	},
	render: function(){
		return (
			<div>
			<p> Search by keyword: {this.state.keyword}</p>
				<form onSubmit = {this.handleFormSubmit}>
					<input onChange={this.handleKeywordChange}
					 value={this.state.keyword} type="text" placeholder="..." id="inputKeyword" />
					 <div>
					<button className="btn searchButton"><FaArrowRight /></button>
					</div>
				</form>
			</div>
			)
	}
});

module.exports = SearchBar;
