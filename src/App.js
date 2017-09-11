import React, { Component } from 'react';
import './App.css';
import { Menuoption } from './components/menuoption/Menuoption.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="menu">
          <Menuoption title="Home" class="menu-home" />
          <Menuoption title="Music" class="menu-music" />
          <Menuoption title="Coding" class="menu-coding" />
          <Menuoption title="Contact" class="menu-contact" />
        </div>
        <div className="App-header">
          <h2>Zane Russell</h2>
          <h4>Front-end Developer</h4>
        </div>
      </div>
    );
  }
}

export default App;
