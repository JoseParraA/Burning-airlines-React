import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/">Log in</Link>
        <Link to="/Flights">Search Flights</Link>
        <Link to="/Reservations">Choose Seating</Link>
        <h1>Burning Airlines</h1>

        <LogIn />

      </div>
    )
  }
}
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div className="form-signup">
        <h2>Log in</h2>
        <form>
          <input type="text" placeholder="Name" name="name" />
          <input type="submit" value="Log in"/>
        </form>
      </div>
    )
    }
}

export default Home;
