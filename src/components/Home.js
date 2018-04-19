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
      <div class="nav">

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

    const ghUrl = "https://burning-airlines-sjt-react.herokuapp.com/#/Flights/"; // changed from localhost:3000
    // const ghUrl = "http://localhost:3000/#/Flights/"; // changed from localhost:3000

    if (this.state.name === "Sam")
    {
      window.location.href = `${ghUrl}`;
    }

    if (this.state.name === "admin")
    {
      window.location.href = `${ghUrl}`;
    }
  //   else {
  // // window.location.href = ghUrl;
  // window.alert('not a user');
//}
  }

  render() {
    return (
      <div class='LogIn'>
        <h2>Log in</h2>
        <form onSubmit={this._handleSubmit}>
          <input onChange={this._handleChange} value={this.state.name} type="text" placeholder="Name" name="name" />
          <input type="submit" value="Log in"/>
        </form>
        <img src='https://ep00.epimg.net/elpais/imagenes/2015/12/28/paco_nadal/1451287800_145128_1451287800_noticia_normal.jpg'></img>

      </div>

    );
  }
}

export default Home;
