import React, { Component } from 'react';
import FlagGame from './FlagGame';
import WorldImg from './world.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flag-app">
        <header className='header' style={{backgroundImage: `url(${WorldImg})`}}>
          <h1 className='title'>Guess The Flag</h1>
        </header>

        <FlagGame/>
      </div>
    );
  }
}

export default App;
