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
                                   summary="On Tour is a gas calculator for bands on the road. Utilizing the GoogleMaps API, the U.S. Energy Information Administration API, and data provided by the user, On Tour will calculate distances and total cost with respect to local gas prices and return an estimate.  Notes can be stored within each location for easy recall." 
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
                    <CodingProject title="Tron 2.0" 
                                   summary="Tron 2.0 is a clone of the classic arcade game, Tron.  It has two player capability, variable speeds, and a rudimentary AI to challenge 1-on-1." 
                                   builtUsing="VanillaJS"
                                   picture={require('./tron.png')}
                                   pageLink="https://zanedr.github.io/gametimeES6/"
                                   gitLink="https://github.com/zanedr/gametimeES6"/>
                    <CodingProject title="Movie-Tracker" 
                                   summary="Movie-Tracker was built in a three person group as our first foray into using React and Redux in conjunction with Node.js, Express and PostSQL.  It utilized The Movie Database API to display new releases and allow users to create accounts to track them." 
                                   builtUsing="React, Redux, Node.js, Express"
                                   picture={require('./movie.png')}
                                   pageLink="https://movietracker-turing.herokuapp.com/"
                                   gitLink="https://github.com/zanedr/movie_tracker"/>
                    <CodingProject title="Montu Website" 
                                   summary="Square-space esque website built for Norman, OK, EDM band Montu. The site was an experiment on using parallax scrolling for background images." 
                                   builtUsing="HTML, CSS"
                                   picture={require('./montu.png')}
                                   pageLink="https://zanedr.github.io/montu-website/"
                                   gitLink="https://github.com/zanedr/montu-website"/>
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