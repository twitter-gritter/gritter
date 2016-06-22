var React = require('react')
  , Griddle = require('griddle-react')
  , CellBlock = require('react-cellblock')
  , Grid = CellBlock.Grid
  , Row = CellBlock.Row
  , Column = CellBlock.Column
  , MyGrid = null;


var MyGrid = React.createClass({
  render: function(){
    return(
      <div className ="container">
          <Grid>
              <Row>
                <Column width="1/6">I am one sixth</Column>
                <Column width="2/6">I am two sixths</Column>
                <Column width="3/6">I am three sixths</Column>
              </Row>
              <Row>
                <Column width="2/4">I am one half</Column>
                <Column width="1/4">I am one quarter</Column>
                <Column width="1/4">I am one quarter</Column>
              </Row>
          </Grid>
      </div>
    )
  }
});

module.exports = MyGrid;
