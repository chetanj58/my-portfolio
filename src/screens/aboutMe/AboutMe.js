import React from 'react';
import './AboutMe.css';
import Person from '../../images/Person.png';


function AboutMe() {
  return (
    <div className='about__container' id='about-me'>
     <div>
        <img src={Person} alt='Person Icon' />
     </div>
     <div className='about__text'>
     <h1>About Me</h1>
     <p>My Detail Information</p>
     </div>
    </div>
  )
}

export default AboutMe
