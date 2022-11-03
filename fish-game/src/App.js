import logo from './logo.svg';
import './App.css';
import './styles/Fish.css'
import './styles/FishGameHeader.css'
import React, { useState } from "react";
import Fishes from './components/Fishes';
import Fish from './components/Fish';
import FishGameHeader from './components/FishGameHeader';
import ScoreBar from './components/ScoreBar';

function App() {
    const [highScoreCount, setHighScoreCount] = useState(0);
    const [currentScoreCount, setCurrentScoreCount] = useState(0);
    
    
  return (
    <div className="App">
      <FishGameHeader />
      <ScoreBar highScoreCount={highScoreCount} currentScoreCount={currentScoreCount}/>
      <Fishes/>
    </div>
  );
}

export default App;
