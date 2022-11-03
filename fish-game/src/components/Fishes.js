import React, {useState, useEffect} from "react";
import App from "../App";
import uniqid from "uniqid";
import Fish from "./Fish";
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

const Fishes = () => {
    const [fishList, setFishList] = useState([americanshad, atlanticcroaker, blackdrum,
    bluefish, pigfish, pinfish, reddrum, redporgy, spanishmackerel, spottedseatrout, vermillionsnapper, whitegrunt]);
    const [shuffled, setShuffled] = useState(true);

    
        
    
    const shuffle = () => {
        //let currentIndex = fishList.length - 1;
        console.log("clicked!")
        let randomIndex;
        let shuffledArr = [];
        let count = 0;
        while(count != fishList.length - 1){
            randomIndex = Math.floor(Math.random() * fishList.length);
            if(shuffledArr.indexOf(fishList[randomIndex] == -1)){
                shuffledArr.push(fishList[randomIndex]);
                count +=1;
            } else {
                randomIndex = Math.floor(Math.random() * fishList.length);
            }
        }
        
        //while(currentIndex >= 0) {
            //randomIndex = Math.floor(Math.random() * fishList.length);
            //let temp = fishList[randomIndex];
            //fishList[randomIndex] = fishList[currentIndex];
            //fishList[currentIndex] = temp;
            //currentIndex-=1;
        //}
        
        setFishList(shuffledArr);
        
        
    }

    



    return (
        <div className="fishContainer">
            {console.log(fishList)}
            {fishList.map((fish)=>{
                
                return(
                <div className="fishCard" onClick={shuffle}>
                    <img src={fish} alt="fishMissing"/>
                </div>
                )
            })}
            
        </div>
    );
 }

 export default Fishes;