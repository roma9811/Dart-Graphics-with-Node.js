// src/App.js
import React from 'react';
import './App.css';


import { FooterComponent } from './Components/FooterComponent';
import { HeaderComponent } from './Components/HeaderComponent';
import { MainComponent } from './Components/MainComponent';
import { MainComponent2 } from './Components/MainComponent2';
import { MainComponent3 } from './Components/MainComponent3';
import { MainComponent4 } from './Components/MainComponent4';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <MainComponent2 />
      <MainComponent3 />
      <MainComponent4 />
      <FooterComponent />
    </div>
  );
}

export default App;
