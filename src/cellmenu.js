import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Cell from '/components/cell';


function Cell(props) {
  return (
    <button className="cell" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}


class Grid extends Component {
  constructor() {
    super();
    this.state = { cells: Array(9).fill(null) };
  }

  handleClick(i) {
  const cells = this.state.cells.slice();
  cells[i] = 'X';
  this.setState({cells: cells});
  }

  renderCell(i) {
  return <div className="grid-row"><Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)} /></div>;
  }

  render() {
    return (
      <div>
        {this.renderCell(0)}
        {this.renderCell(1)}
        {this.renderCell(2)}
        {this.renderCell(3)}
      </div>
    );
  }
}

ReactDOM.render(<Grid />, document.querySelector('.scrollbar'));
