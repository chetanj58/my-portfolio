import React from 'react';
import './App.css';

import Navigation from './screens/navigationBar/navigationBar';
import Particles  from './screens/particles';
import Header from './screens/header/Header';
function App() {
  return (
    <div className="App">
     <Navigation />
     <Header />
    <Particles />
    </div>
  );
}

export default App;
