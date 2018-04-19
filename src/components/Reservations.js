import React, { PureComponent as Component } from 'react';
import Home from './Home';
import Flights from './Flights';

class Reservations extends Component {

  constructor() {
    super();
      this.state = {
      seat: [
        '1A','1B','1C','1D',
        '2A','2B','2C','2D',
        '3A','3B','3C','3D'

      ],
      seatAvailable: [
        '1A','1B','1C',
        '2A','2B','2C',
        '3A','3B','3C'
      ],
      seatReserved: []
    }
  }

  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Reservation</h1>
        <DrawGrid
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          onClickData = { this.onClickData.bind(this) }
          />
          <BookFlight />
      </div>
    )
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
       <div className="container">
        <h2>seating</h2>
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
              </tr>
          </tbody>
        </table>

        <AvailableList available = { this.props.available } />
        <ReservedList reserved = { this.props.reserved } />
       </div>
    )
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return(
      <div className="left">
        <h4>Available Seats: ({seatCount === 0? 'No seats available' : seatCount})</h4>
        <ul>
          {this.props.available.map( res => <li key={res} >{res}</li> )}
        </ul>
      </div>
    )
  }
}

class ReservedList extends React.Component {
  render() {
    return(
      <div className="right">
        <h4>Reserved Seats: ({this.props.reserved.length})</h4>
        <ul>
          { this.props.reserved.map(res => <li key={res} >{res}</li>) }
        </ul>
      </div>
    )
  }
}

class BookFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      flight: '',
      seat: '',
      seatReserved: []
    };
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleFlightChange = this._handleFlightChange.bind(this);
    this._handleSeatChange = this._handleSeatChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleNameChange(e) {
    this.setState( { name: e.target.value} );
  }

  _handleFlightChange(e) {
    this.setState( { flight: e.target.value} );
  }

  _handleSeatChange(e) {
    this.setState( { seat: e.target.value} );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({name: ''});
    this.setState({flight: ''});
    this.setState({seatRese: ''});

  };

  render() {
    return (

  <div>
  <h1>Please call Joel @ Burning Airlines</h1>
  <h1>on 0403 814 552 to make your booking.</h1>
  </div>
    );
  }
}

export default Reservations
