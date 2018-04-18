import React, { Component } from 'react';
import Home from './Home';
import Flights from './Flights';
import Reservations from './Reservations';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: props.location.pathname.substring(1)
  }
}
  render() {
    return (
      <div className="App">
        <Home />
        <Flights user_id={this.props.user_id} username={this.state.name} />
        <Reservations />
      </div>
    );
  }
}

export default App;
