import React from 'react';
import './Menuoption.css';

export const Menuoption = (props) => {
    const { title, classes, location } = props

    return (
        <article className={`menu-option ${classes}`}>
            <a href={location}>
                <button className="menu-option-text">
                    {title}
                </button>
            </a>
        </article>
    )
}