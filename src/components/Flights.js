import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const SERVER_URL = 'https://sjt-burning-airlines.herokuapp.com/flights.json';



class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
    };
    this._handleOriginChange = this._handleOriginChange.bind(this);
    this._handleDestinationChange = this._handleDestinationChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleOriginChange(e) {
    this.setState( { origin: e.target.value } );
  }

  _handleDestinationChange(e) {
    this.setState( { destination: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.origin, this.state.destination );
    this.setState({origin: ''});
    this.setState({destination: ''});
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit } >
        Origin:
        <select value={this.state.value} onChange={this._handleOriginChange}>
          <option value=""></option>
          <option value="Adelaide">Adelaide</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Sydney">Sydney</option>
        </select>
        Destination:
        <select value={this.state.value} onChange={this._handleDestinationChange}>
          <option value=""></option>
          <option value="Adelaide">Adelaide</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Sydney">Sydney</option>
        </select>
        <input type="submit" value="Search Flights" />
      </form>
    );
  }
}


SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

function ShowFlights(props) {
  return (
    <div>
        { props.flights.map( f =>
            <p key={f.id}>{f.origin} to {f.destination} on {f.date}
          <button className="res-button book" onClick = { () => { this._handleClick(f.id) } }>
            Book Flight
          </button></p>
        )}
    </div>
  );
}

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = { flights: [] ,
      searchedflights: [],
      origin: '',
      destination: ''
    };

    this.searchFlights = this.searchFlights.bind(this);

    const fetchFlights = () => { // Fat arrow functions do not break the connection to this
      axios.get(SERVER_URL).then( results => this.setState( { flights: results.data } ) );
      

    }
    fetchFlights();
  }


  searchFlights(o, d) {
    axios.get(SERVER_URL).then(function (results){
      let array_flights = [];
      for (let i =0;i<results.data.length;i++)
        if (results.data[i].origin === o && results.data[i].destination === d)
          array_flights.push(results.data[i]);
      this.setState({flights : array_flights});
    }.bind(this));

    return (
      <div>
          { this.state.flights.map( f =>
              <p key={f.id}>{f.origin} to {f.destination} on {f.date}
            <button className="res-button book" onClick = { () => { this._handleClick(f.id) } }>
              Book Flight
            </button></p>
          )}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to="/Flights">Search Flights</Link>
        <Link to="/Reservations">Choose Seating</Link>
        <h1>Burning Airlines</h1>
        <h2>Search Flights</h2>
        <SearchForm  onSubmit={ this.searchFlights } />
        <ShowFlights  flights={ this.state.flights } />
      </div>
    )
  }
}

export default Flights;
