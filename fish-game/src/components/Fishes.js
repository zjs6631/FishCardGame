import React, {useState} from "react";
import App from "../App";
import uniqid from "uniqid";
import Fish from "./Fish";

const Fishes = () => {
    const [fishList, setFishList] = useState(["americanshad.jpg", "atlanticcroaker.jpg", "blackdrum.jpg", "bluefish.jpg",
    "pigfish.jpg", "pinfish.jpg", "reddrum.jpg", "redporgy.jpg", "spanishmackerel.jpg", "spottedseatrout.jpg",
    "vermillionsnapper.jpg","whitegrunt.jpg"]);

    const [currentlyDisplayed, setCurrentlyDisplayed] = useState([]);

    const shuffle = () => {
        let currentIndex = fishList.length
        let randomIndex;
        while(currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            setFishList([fishList[currentIndex], fishList[randomIndex]] = [fishList[randomIndex], fishList[currentIndex]]);
        }
        
        return fishList;
    }



    return (
        <div>
            {fishList.map((fish)=>{
                console.log(fish);
                return <Fish img={fish}/>
            })}
            
        </div>
    );
 }

 export default Fishes;