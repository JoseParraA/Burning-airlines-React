import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Reservations extends Component {
  render() {
    return (
      <div>
        <h2>This is the Reservations page</h2>
        <Link to="/">Back to home</Link>
        <Link to="/Flights">Flights pages</Link>
      </div>
    )
  }
}

export default Reservations;
