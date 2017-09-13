import React from 'react';
import './CodingProject.css';

export const CodingProject = (props) => {
    const { title, summary, picture }  = props

    return(
        <div className="coding-project-container">
            <span className="coding-project-image-container">
                <img className="coding-project-image" src={picture}/>
            </span>
            <section className="coding-project-info">
                <h4 className="coding-project-title">{title}</h4>
                <p className="coding-project-summary">{summary}</p>
            </section>
        </div>
    )
}