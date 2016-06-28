var React = require('react');


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
		newKeyword = encodeURIComponent(newKeyword);

		//onKeywordSubmit is defined in getTweets.js
		this.props.onKeywordSubmit(newKeyword);
	},
	render: function(){
		return (
			<div>
				<form onSubmit = {this.handleFormSubmit}>
					<input onChange={this.handleKeywordChange} 
					 value={this.state.keyword} type="text" placeholder="Search" />
					<button> Enter </button>
				</form>	
			</div>
			)
	}
});

module.exports = SearchBar;