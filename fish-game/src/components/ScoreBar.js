import React, {useState} from "react";
import App from "../App";

const ScoreBar = ({currentScoreCount, highScoreCount}) => {
    

    return(
        <div className="scoreBar">
            <div className="currentScore">
                <p>Current Score: {currentScoreCount}</p>
            </div>
            <div className="highScore">
                <p>Highscore: {highScoreCount}</p>
            </div>
        </div>
    )
}

export default ScoreBar;