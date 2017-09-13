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
                    <CodingProject title="On Tour" 
                                   summary="On Tour is a gas calculator for band on the road" 
                                   builtUsing="React, Redux"
                                   picture={require('./ontour.png')}
                                   pageLink="https://zanedr.github.io/On-Tour/"
                                   gitLink="https://github.com/zanedr/On-Tour"/>
                    <CodingProject title="Etude" 
                                   summary="Etude is a music practice assistant created as part of a three person team for our final project at Turing. Etude allows aspiring musicians to speed up or slow down songs to a customized difficulty level while simultaneously displaying the tablature.  Songs can be saved the user for future use." 
                                   builtUsing="React, Node.js, Express, Knex"
                                   picture={require('./etude.png')}
                                   pageLink="https://shielded-depths-13754.herokuapp.com/"
                                   gitLink="https://github.com/zanedr/Etude"/>
                    <CodingProject title="Tron" 
                                   summary="Tron 2.0 is a clone of the classic arcade game, Tron.  It has two player capability, variable speeds, and a rudimentary AI to challenge 1-on-1." 
                                   builtUsing="VanillaJS"
                                   picture={require('./tron.png')}
                                   pageLink="https://zanedr.github.io/gametimeES6/"
                                   gitLink="https://github.com/zanedr/gametimeES6"/>
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