import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom'
// import { Menu } from './components/menu/Menu'
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
      <div className="app">
        <div className="app-header">
          <h2 className="app-header-name">Zane Russell</h2>
          <h4>Front-End Developer</h4>
        </div>
        {/* {this.adjustMenuSticky()} */}
        <section>
          <About />
          <Coding />
        </section>
        <Contact />
      </div>
    );
  }
}

export default App;
