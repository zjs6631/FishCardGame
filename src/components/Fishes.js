import React, {useState, useEffect} from "react";
import App from "../App";

import uniqid from "uniqid";
import americanshad from "../images/fishImages/americanshad.jpg";
import atlanticcroaker from "../images/fishImages/atlanticcroaker.jpg";
import blackdrum from "../images/fishImages/blackdrum.jpg";
import bluefish from "../images/fishImages/bluefish.jpg";
import pigfish from "../images/fishImages/pigfish.jpg";
import pinfish from "../images/fishImages/pinfish.jpg";
import reddrum from "../images/fishImages/reddrum.jpg";
import redporgy from "../images/fishImages/redporgy.jpg";
import spanishmackerel from "../images/fishImages/spanishmackerel.jpg";
import spottedseatrout from "../images/fishImages/spottedseatrout.jpg";
import vermillionsnapper from "../images/fishImages/vermillionsnapper.jpg";
import whitegrunt from "../images/fishImages/whitegrunt.jpg";
import ScoreBar from "./ScoreBar";

const Fishes = () => {
    const [fishList, setFishList] = useState([{key: uniqid(), id: uniqid(), name: americanshad}, {key: uniqid(), id: uniqid(), name: atlanticcroaker}, {key: uniqid, id: uniqid(), name: blackdrum},
    {key: uniqid(), id: uniqid(), name: bluefish}, {key: uniqid(), id: uniqid(), name: pigfish}, {key: uniqid(), id: uniqid(), name: pinfish}, {key: uniqid(), id: uniqid(), name: reddrum}, {key: uniqid(), id: uniqid(), name :redporgy},
    {key: uniqid(), id: uniqid(), name: spanishmackerel}, {key: uniqid(), id: uniqid(), name: spottedseatrout}, {key: uniqid(), id: uniqid(), name: vermillionsnapper}, {key: uniqid(), id: uniqid(), name: whitegrunt}]);
    
    const [highScoreCount, setHighScoreCount] = useState(0);
    const [currentScoreCount, setCurrentScoreCount] = useState(0);

    const[currGame, setCurrGame] = useState([])

    
        
    
    const shuffle = () => {
        
        
        let randomIndex;
        let shuffledArr = [];
        let count = 0;
        while(count != fishList.length){
            randomIndex = Math.floor(Math.random() * fishList.length);
            if(shuffledArr.indexOf(fishList[randomIndex]) == -1){
                
                shuffledArr.push(fishList[randomIndex]);
                count +=1;
            }
        }
        
        setFishList(shuffledArr);
        
    }

    const handleClick = (e) =>{
        if(currGame.indexOf(e.currentTarget.id) == -1){
            currGame.push(e.currentTarget.id)
            
            
            setCurrentScoreCount(currentScoreCount+1);
            
            if(currentScoreCount > highScoreCount){
                
                setHighScoreCount(highScoreCount+1);
            }
            
        } else {
            setCurrGame([]);
            if(currentScoreCount > highScoreCount){
                setHighScoreCount(highScoreCount + 1);
            }
            setCurrentScoreCount(0);
        }
        shuffle();
        
        
    }



    return (
        <div className="gameBody">
            <ScoreBar highScoreCount={highScoreCount} currentScoreCount={currentScoreCount}/>
            <div className="fishContainer">
            {fishList.map((fish)=>{
                
                return(
                <div  key={fish.key} id={fish.id} className="fishCard" onClick={handleClick} >
                    <img src={fish.name} alt="fishMissing"/>
                </div>
                )
            })}
            </div>
        </div>
    );
 }

 export default Fishes;