import React, { Component } from 'react';
import { Resume } from '../resume/Resume';
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

    detectResume() {
        if(this.state.resumeDisplay === true) {
            return(
                <Resume />
            )
        }
    }

    render() {
        return(
            <div id='about'>
                <p className='about-text'>
                    I am a Front-End Developer and recent graduate from the Turing School of Software and Design.</p>
                <p className='about-text'>
                    In the time before Turing, I was a teacher and working musician.  Music is a chaotic industry, 
                    and being a member of band requires working effectively as a team and learning new skills 
                    quickly.
                    I've managed multiple regionally successful musical groups, taught to all skill levels and ages, 
                    organized shows and performed across the United States, waited tables, 
                    trained new employees, repaired equipment,  
                    and acted as webmaster and social outreach coordinator.
                </p>
                <p className='about-text'>These experiences have put me on every side and dynamic of team involvement, from 
                    being a team member in a cooperative organization with good-natured folk, to taking the reins and
                    leading the completion of a project, to
                    keeping the peace between volitile personalities to ensure that a commitment is fulfilled.
                </p>
                <p className='about-text'>
                    I'd much rather work with the good-natured folk, and am looking for a role with a team of
                    great people that enjoy working together.
                </p>
                {/* <p className='about-text'> This site is a homepage, resume, and playground to experiment with javascript in a simple black 
                    and white design environment.
                </p> */}
                <button id='about-resume' onClick={() => this.switchPopUpStatus()}>
                    Resume {this.arrow()}
                </button>
                {this.detectResume()}
            </div>
        )
    }
}