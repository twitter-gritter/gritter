var React = require('react'),
    ResponsiveReactGridLayout = require('react-grid-layout').Responsive,
    _ = require('lodash'),
    WidthProvider = require('react-grid-layout').WidthProvider,
    ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

var Card = require('./card.js');

var AddRemoveLayout = React.createClass({
  getDefaultProps() {

    return {
      className: "layout",
      cols: {lg: 12, md:10, sm:6, xs:4, xxs:2},
      rowHeight: 100
    };
  },


  getInitialState(){
    return {
      items: [],
      newCounter:0
    };
  },
  makeTweets(){

      this.setState({items: this.props.tweets.map(function(i, key, list){
        return {i: key.toString(), x: key * 2, y: 0, w:2, h:2, text: i.text}
      })});

  },
  createElement(el){
    var removeStyle = {
      postion: 'absolute',
      right: '20px',
      top: 0,
      cursor: 'pointer'
    };
    var i = el.add ? '+' : el.i;
    return (
      <div key={i} _grid={el}>
        {el.add ?
          <span className="addText" onClick={this.onAddItem} title="Click here to add an item">Add +</span>
        : <span className="text">{el.text}</span>}
        <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
      </div>
    );
  },

  onAddItem(){
    this.setState({
      items: this.state.items.concat({
        i: 't' + this.state.newCounter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity,
        w: 2,
        h: 2
      }),
      newCounter: this.state.newCounter + 1
    });
  },
  onBreakpointChange(breakpoint, cols){
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onLayoutChange(layout){
    this.setState({layout: layout});
  },

  onRemoveItem(i){
    this.setState({items: _.reject(this.state.items, {i: i})});
  },
  dontmakeTweets:function(){
    var tweetCards = this.props.tweets.map(function(item){
      return <Card text={item.text} />
    })
  },
  componentDidMount: function(){
    this.makeTweets();
    console.log(this.state.items);
  },
  render:function(){

    return(
      <div>
        <button onClick={this.onAddItem}>Add Item</button>
        <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}  {...this.props} >
          {_.map(this.state.items, this.createElement)}
        </ResponsiveReactGridLayout>
      </div>
    )
  }
});

module.exports = AddRemoveLayout;
//{_.map(this.state.items, this.createElement)}
// getInitialState(){
//   return {
//     items: [0, 1, 2, 3, 4].map(function(i, key, list){
//       return {i: i.toString(), x: i * 2, y: 0, w: 2, h:2, add: i === (list.length - 1).toString()};
//     }),
//     newCounter: 0
//   };
// },
