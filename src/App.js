import React, { Component } from 'react';
import './App.css';
import { Menuoption } from './components/menuoption/Menuoption.js'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2 className="app-header-name">Zane Russell</h2>
          <h4>Front-end Developer</h4>
        </div>
        <div id="menu">
          <Menuoption title="Home" class="menu-home" />
          <Menuoption title="Music" class="menu-music" />
          <Menuoption title="Coding" class="menu-coding" />
          <Menuoption title="Contact" class="menu-contact" />
        </div>
      </div>
    );
  }
}

export default App;
