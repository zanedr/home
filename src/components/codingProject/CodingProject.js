import React from 'react';

export const Coding = (props) => {
    const { title, summary, picture }  = props

    return(
        <div>
            <h4>{title}</h4>
            <p>{summary}</p>
        </div>
    )
}