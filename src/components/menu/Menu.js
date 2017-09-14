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
            <Menuoption title="Home" class="menu-home" location='#home'/>
            <Menuoption title="Resume" class="menu-resume" location='#about-resume' />
            <Menuoption title="Projects" class="menu-coding" location='#coding-container' />
          </div>
        )
    }
}