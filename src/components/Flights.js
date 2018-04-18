import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Flights extends Component {
  render() {
    return (
      <div>
        <h2>This is the Flights page</h2>
        <Link to="/">Back to home</Link>
        <Link to="/Reservations">Reservations page</Link>
      </div>
    )
  }
}

export default Flights;
