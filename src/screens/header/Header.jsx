import React from 'react';
import './Header.css';
import Typed from 'react-typed';

function Header() {
  return (
    <div className='main-info'>
      <h1>What I am</h1>
      <Typed
        strings={[
          ' ',
          'A Software Engineer',
          'Also known as a',
          'Front-end developer',
          'Or!',
          'a coder']}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  )
}

export default Header
