import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is the homepage</h2>
        <p>
          link to <Link to="/Flights">Flights page</Link>
          link to <Link to="/Reservations">Reservations page</Link>
        </p>
      </div>
    )
  }
}

export default Home;
