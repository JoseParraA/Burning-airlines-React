import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';



class Reservations extends Component {
  render() {
    return (
      <div>
        <h2>This is the Reservations page</h2>
        <Link to="/">Back to home</Link>
        <Link to="/Flights">Flights page</Link>
        <PlaneSeats />
        <SeatsPlan />
      </div>
    );
  }
}


class PlaneSeats extends Component {
  constructor() {
    super();
    this.state = { value: "__" }
  }
  render() {
    return (
      <button className="book seat" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class SeatsPlan extends Component {
  renderSquare(i) {
    return <PlaneSeats />;
    }

  render() {
    const status = '';

    return (
      <div>
        <p> Please Check where you would like to sit</p>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
        <div className="board-row">
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
      </div>
    );
  }
}

export default Reservations;
