import React, { Component } from 'react';
import Particles from 'react-particles-js';
import spacetime from 'spacetime';
import Autosuggestion from './components/Autosuggestion/Autosuggestion';
import CardClock from './components/CardClock/CardClock';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 200
      },
    line_linked: {
                    shadow: {
                      enable: true,
                      color: "#888888",
                      blur: 5
                    }
                  }
    }
  }
};

const initialState = {
  locName: '',
  cards: [],
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onLocationNameHandler = (loc) => {
    this.setState({locName: loc});
  };

  onAddClockClick = () => {
    console.log('Adding Clock', this.state.locName);
    let cardArray = this.state.cards.concat(this.state.locName);
    this.setState({cards: cardArray});
  };

  render() {
    const { cards } = this.state;
    return (
      <div className='App'>
        <Particles className='particles' params={ particleOptions }/>
        <Autosuggestion onLocationNameHandler={ this.onLocationNameHandler }/>
        <button className='butn' onClick={ this.onAddClockClick }>Add Clock</button>
        <h1>{ spacetime.now().format('nice') }</h1>
        <div>
          {
          cards.map( (card, i) => {
                return (<CardClock key={ card.split(' ').join('').concat(i+1) } location={ card } />);
              })
          }
        </div>
      </div>
    );
  }
}

export default App;


/*
Sign In page
Sign Out page
Register page
A Card for showing Date and Time and timezone
  A refresh button - based on this a API fetch is made
  A time counter maybe?
    --> Auto increment after initial API fetch on login
Search Bar - Auto Complete
  Get latitude and longitudes
Current City and Time
  Get GPS coordinates
*/
