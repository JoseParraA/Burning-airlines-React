import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
const SERVER_URL = 'https://sjt-burning-airlines.herokuapp.com/users.json';

class Home extends Component {
  handleLogin(name) {
    console.log('logging in', name)
  }
  render() {
    return (
      <div>
        <Link to="/">Log in</Link>
        <Link to="/Flights">Search Flights</Link>
        <Link to="/Reservations">Choose Seating</Link>
        <h1>Burning Airlines</h1>
        <LogIn onSubmit={this.handleLogin}/>

      </div>
    )
  }
}
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState( { name: e.target.value} );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({name: ''});
  }

  render() {
    return (
      <div>
        <h2>Log in</h2>
        <form onSubmit={this._handleSubmit}>
          <input onChange={this._handleChange} value={this.state.name} type="text" placeholder="Name" name="name" />
          <input type="submit" value="Log in"/>
        </form>
      </div>
    );
  }
}

export default Home;
