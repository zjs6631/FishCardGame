import React, {useState} from "react";
import App from "../App";
import uniqid from "uniqid";
import Fishes from "./Fishes";



const Fish = (props) =>{
    let link = "../images/fishImages/" + props.img;
    
    return(
        <div>
            <image src={require(link)} alt="fishMissing" />
        </div>
    )
}

export default Fish;