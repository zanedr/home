import React from 'react';
import './Menuoption.css';

export const Menuoption = (props) => {
    const { title, classes } = props

    return (
        <article className={`menu-option ${classes}`}>
            <h3 className="menu-option-text">{title}</h3>
        </article>
    )
}