import React, { Component } from 'react';
import Home from './Home';
import Flights from './Flights';
import Reservations from './Reservations';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home />
        <Flights />
        <Reservations />
      </div>
    );
  }
}

export default App;
