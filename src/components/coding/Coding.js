import React, { Component } from 'react';
import { CodingProject } from '../codingProject/CodingProject'
import './Coding.css';

export class Coding extends Component {
    constructor(props){
        super(props)
        this.state = {
            popUp: true,
        }
    }

    switchPopUpStatus() {
        if(this.state.popUp === true) {
            this.setState({popUp: false})
        } else {
            this.setState({popUp: true})
        }
    }

    detectPopUp() {
        if(this.state.popUp === true) {
            return(
                <div>
                    <CodingProject title="On Tour" summary="On Tour is a gas calculator for band on the road" picture={require('./ontour.png')}/>
                    <CodingProject title="Etude" summary="On Tour is a gas calculator for band on the road" picture={require('./etude.png')}/>
                    <CodingProject title="Tron" summary="On Tour is a gas calculator for band on the road" picture={require('./tron.png')}/>
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