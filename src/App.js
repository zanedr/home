import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom'
import { Menu } from './components/menu/Menu'
import { About } from './components/about/About'
import { Coding } from './components/coding/Coding'
import { Contact } from './components/contact/Contact'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  // detectScroll() {
  //   console.log('yeah');
  // }

  // adjustMenuSticky() {
  //   const menu = document.querySelector('#menu');
  //   const scroll = window.scrollY;

  //   return (
  //       <Menu pageScroll={() => this.detectScroll.bind(this)}/>
  //   )
  // }

  render() {
    return (
      <div id="home">
        <br id="app-marker"/>
        <Menu />
        <div id="app-header">
          <h2 id="app-header-name">Zane Russell</h2>
          <h4>Front-End Developer</h4>
        </div>
        <Contact />
        {/* {this.adjustMenuSticky()} */}
        <section>
          <About />
          <Coding />
        </section>
      </div>
    );
  }
}

export default App;
