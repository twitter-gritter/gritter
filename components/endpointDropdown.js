var React = require('react');


var DropDown = React.createClass({
	getInitialState: function(){
		return {endpoint: 'search/tweets'}
	},
	handleEndpointChange: function(event){
		this.setState({
			endpoint: event.target.value
		})
		
	},
	handleSubmit: function(event){
		event.preventDefault();
		
		var endpoint = this.state.endpoint;
		
		//onKeywordSubmit is defined in getTweets.js
		this.props.onKeywordSubmit(endpoint);
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

module.exports = DropDown;

/*<select size="1" id="slt_country" name="country">
<option value=""> - Select - </option>
<option value="AF">Afghanistan</option>
<option value="AL">Albania</option>
<option value="DZ">Algeria</option>
</select>*/