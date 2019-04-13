import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Autosuggestion from './components/Autosuggestion';
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
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
    }
  }
};

class App extends Component {  
  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particleOptions}/>
        <Autosuggestion />
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
