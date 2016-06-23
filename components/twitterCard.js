//Router  calls in -->
//  Main    calls in -->
//    GetTweets   calls in -->
//      TwitterCard   calls in -->
//        Grid

var React = require('react');
var Grid = require('./testGrid.js');

var TwitterCard = React.createClass({
	render: function(){

		var tweets = this.props.tweetsArr.map(function(data){
			return <Grid author={data.screen_name} date={data.created_at} 
					text={data.text} profile_img={data.profile_img} />
		})
		return (
			<div>
			<h1>Hello, this is the twitter card</h1>
			{ tweets }
			</div>

		)
	}

});

module.exports = TwitterCard;