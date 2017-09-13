import React, { Component } from 'react';
import { Menuoption } from '../menuoption/Menuoption.js'
import './Menu.css';

export class Menu extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div id="menu">
            <Menuoption title="Home" class="menu-home" onClick={()=> {this.props.pageScroll}}/>
            <Menuoption title="About" class="menu-about" />
            <Menuoption title="Coding" class="menu-coding" />
            <Menuoption title="Contact" class="menu-contact" />
          </div>
        )
    }
}