
import './App.css';
import './styles/Fish.css'
import './styles/FishGameHeader.css'
import React, { useState } from "react";
import Fishes from './components/Fishes';

import FishGameHeader from './components/FishGameHeader';


function App() {
    
    
    
  return (
    <div className="App">
      <FishGameHeader />
      <Fishes/>
    </div>
  );
}

export default App;
