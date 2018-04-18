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
          <LogIn />
        </p>

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
