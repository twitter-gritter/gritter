

var React = require('react'),
    Griddle = require('griddle-react'),
    CellBlock = require('react-cellblock'),
    Grid = CellBlock.Grid,
    Row = CellBlock.Row,
    Column = CellBlock.Column,
    MyGrid = null;

var MyGrid = React.createClass({
  render: function(){
    return(
      <div className ="container">
        <Grid>
          <Row>
            <Column  width="1/2">
              Left!
            </Column>
            <Column width ="1/2">
              Right!
            </Column>
          </Row>
          <Row>
            <Column  width="1/4">
              Left!
            </Column>
            <Column width ="1/4">
              Right!
            </Column>
          </Row>
          <Row>
            <Column  width="1/2">
              Left!
            </Column>
            <Column width ="1/2">
              Right!
            </Column>
          </Row>
        </Grid>
      </div>
    )
  }
});
module.exports = MyGrid;
