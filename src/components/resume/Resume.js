import React from 'react';
import './Resume.css';

export const Resume = () => {
    return(
        <section id='resume-container'>
            <section className='resume-left-side'>
                <section className='resume-skills'>
                    <h4 className='resume-section-title'>
                        Skills
                    </h4>
                    <ul className='resume-section-list'>
                        <li>Javascript</li>
                        <li> React</li>
                        <li>React Router</li>
                        <li>jQuery</li>
                        <li>Redux</li>
                        <li>Mocha</li>
                        <li>Chai</li>
                        <li>Enzyme</li>
                        <li>ExpressJS</li>
                        <li>Node.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Sketch</li>
                    </ul>
            
                </section>
                <section className='resume-knowledge'>
                    <h4 className='resume-section-title'>
                        Knowledge
                    </h4>
                    <ul className='resume-section-list'>
                        <li>Music Education</li>
                        <li>Versed in multiple instruments</li>
                        <li>Graphic Design</li>
                        <li>Small business management</li>
                        <li>Production coordinator</li>
                        <li>Marketing</li>
                        <li>Image Editing</li>
                        <li>Web Usability</li>
                        <li>Interface Design</li>
                    </ul>
                </section>
            </section>
            <section className='resume-right-side'>
                <h4 className='resume-section-title'>
                    Work History
                </h4>
                <div className='resume-work-history'>
                    <h4 className='resume-work-title'>
                        Turing School of Software and Design - 2017
                    </h4>
                    <p className='resume-work-info'>
                    Collaborated with groups to complete and deploy projects using OOP 	and TDD. 
                    </p>
                    <p className='resume-work-info'>
                    Special emphasis on usability, mobility, design, and accessibility.  
                    </p>
                    <p className='resume-work-info'>
                    Worked with both front and back end technologies. 
                    </p>
                </div>
                <div className='resume-work-history'>
                    <h4 className='resume-work-title'>
                    McNellies Group — 2014 - 2017 
                    </h4>
                    <p className='resume-work-info'>
                    Trained new employees to interact with customers and work effectively under pressure on a team. 
                    </p>
                    <p className='resume-work-info'>
                    Communicated with customers and maintained relationships over many years.  
                    </p>
                </div>
                <div className='resume-work-history'>
                    <h4 className='resume-work-title'>
                    Music Educator — 2010 - 2017 
                    </h4>
                    <p className='resume-work-info'>
                    Created individual curriculum for students based on personality, motivation, learning style, and age. 
                    </p>
                    <p className='resume-work-info'>
                    Regularly found unique, personalized ways to communicate foreign concepts to pupils in relatable ways.  
                    </p>
                </div>
                <div className='resume-work-history'>
                    <h4 className='resume-work-title'>
                    Professional Musician — 2008 - 2017
                    </h4>
                    <p className='resume-work-info'>
                    Maintained website and online presence, communicating with fans and promoters.  
                    </p>
                    <p className='resume-work-info'>
                    Worked as band manager for multiple groups - organized shows, festivals, travel plans, and pay.  
                    </p>
                    <p className='resume-work-info'>
                    Kept the peace between chaotic personalities to complete goals. 
                    </p>
                </div>
            </section>
        </section>
    )
}