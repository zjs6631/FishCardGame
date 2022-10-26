import React, {useState} from "react";
import App from "../App";
import uniqid from "uniqid";

const Fishes = () => {
    const [fishList] = useState(["americanshad.jpg", "atlanticcroaker.jpg", "blackdrum.jpg", "bluefish.jpg",
    "pigfish.jpg", "pinfish.jpg", "reddrum.jpg", "redporgy.jpg", "spanishmackerel.jpg", "spottedseatrout.jpg",
    "vermillionsnapper.jpg","whitegrunt.jpg"]);

    const [currentlyDisplayed, setCurrentlyDisplayed] = useState([]);

    const getNextPic = () =>{
        if(currentlyDisplayed.length != 12){
            let index = (Math.random() * 12)
            if(currentlyDisplayed.indexOf(fishList[index]) == -1){
                setCurrentlyDisplayed(currentlyDisplayed.concat(fishList[index]));
                return fishList[index];
            }
        }
    }

    return (
        <div>
            
            
        </div>
    );
 }