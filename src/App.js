import React, { Component } from 'react';
import Particles from 'react-particles-js';
import spacetime from 'spacetime';
import Autosuggestion from './components/Autosuggestion/Autosuggestion';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      locName: '',
    }
  }

  onLocName = (loc) => {
    this.setState({locName: loc});
  };

  onAddClockClick = () => {
    console.log('Adding Clock', this.state.locName);
  };

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particleOptions}/>
        <Autosuggestion onLocName={this.onLocName}/>
        <button className='butn' onClick={this.onAddClockClick}>Add Clock</button>
        <h1>{spacetime.now().format('nice')}</h1>
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
