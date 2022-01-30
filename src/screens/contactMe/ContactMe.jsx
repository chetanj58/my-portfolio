import React from 'react';
import './ContactMe.css';
import { navigationLinks } from '../../helpers/navigationLinks';

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
    return (
        <div className='contactMe__container' id='contact'>
            <div className='contactMe__data_links' style={{ paddingTop: '10px' }}>
                <div style={{ color: 'white' }}>
                    <p>Nashik, Maharashtra, India</p>
                    <p>Chetan Jadhav</p>
                    <p>chetanj58@gmail.com</p>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
                Copyright&copy; {new Date().getFullYear()} All rights reserved
            </div>
        </div>
    )
}

export default ContactMe;
