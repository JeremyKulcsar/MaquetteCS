import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Cell extends Component {
  constructor() {
    super();
    this.state = { value: null };
  }

  render() {
    return (
      <button className="cell" onClick={() => this.props.onClick()}>
        {this.state.value}
      </button>
    );
  }
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
  return <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    return (
      <div className="grid-row">
        {this.renderCell(0)}
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="scrollbar" id="style-1">
        <Grid />
      </div>
    );
  }
}

ReactDOM.render(<Menu />, document.querySelector('.containermenu'));
