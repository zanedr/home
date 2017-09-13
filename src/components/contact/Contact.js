import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <section id='contact-container'>
            <button className='contact-title'>Contact</button>
            <div className='contact-links'>
                <a href="">LinkdIn</a>
                <a href="">GitHub</a>
                <a href="">Twitter</a>
            </div>
        </section>
    )
}