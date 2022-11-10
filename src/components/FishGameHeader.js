import React, {useState} from "react";
import App from "../App";


const FishGameHeader = () => {
    return ( 
        <div className="gameHeader">
            <p>Fish Card Game</p>
            <p className="gameDescription">See how many you can click in a row without<br></br>
            clicking a duplicate!</p>
        </div>)
}

export default FishGameHeader;