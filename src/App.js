import React from 'react';
import './App.css';

import Navigation from './screens/navigationBar/navigationBar';
import Particles from './screens/particles';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import ContactMe from './screens/contactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
      <AboutMe />
      <Technologies />
      <ContactMe />
    </div>
  );
}

export default App;
