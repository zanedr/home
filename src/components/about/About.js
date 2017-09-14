import React, { Component } from 'react';
import './About.css';

export class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            resumeDisplay: false,
        }
    }

    switchPopUpStatus() {
        if(this.state.resumeDisplay === true) {
            this.setState({resumeDisplay: false})
        } else {
            this.setState({resumeDisplay: true})
        }
    }

    arrow() {
        if(this.state.resumeDisplay === true) {
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
        return(
            <div id='about'>
                <p id='about-text'>
                    I am a Front-End Developer and recent graduate from the Turing School of Software and Design.
                    Years of being curious about programming and computers led to a transition from teaching
                    to pursuing an education in front-end engineering.
                    This site is a resume and playground to experiment with javascript in a simple black 
                    and white design environment.
                </p>
                <button className='about-resume' onClick={() => this.switchPopUpStatus()}>
                    Resume {this.arrow()}
                </button>
            </div>
        )
    }
}