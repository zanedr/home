import React, { Component } from 'react';
import { CodingProject } from '../codingProject/CodingProject'
import './Coding.css';

export class Coding extends Component {
    constructor(props){
        super(props)
        this.state = {
            popUp: false,
        }
    }

    switchPopUpStatus() {
        if(this.state.popUp === true) {
            console.log('Coding popup false')
            this.setState({popUp: false})
        } else {
            console.log('Coding popup true')
            this.setState({popUp: true})
        }
    }

    detectPopUp() {
        if(this.state.popUp === true) {
            return(
                <div>
                    ALL DAS PROJECTS
                </div>
            )
        }
    }

    arrow() {
        if(this.state.popUp === true) {
            return(
                <span>&darr;</span>
            )
        } else {
            return(
                <span>&uarr;</span>
            ) 
        }
    }

    render() {
        return (
            <div id='coding-container'>
                <button className='coding-title' onClick={() => this.switchPopUpStatus()}>
                    Projects {this.arrow()}
                </button>
                {this.detectPopUp()}
            </div>
        )
    }
}