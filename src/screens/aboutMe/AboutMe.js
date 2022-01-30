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
        <p>As a Full Stack React Developer offered scalable software solutions. As a part of a cross-functional team
        that’s responsible for the full web development life cycle, from conception to deployment. I am comfortable
        around both front-end and back-end coding languages, development frameworks and third-party libraries
        and also be a team player with a knack for visual design and utility.</p>
      </div>
    </div>
  )
}

export default AboutMe
