import React, {useState} from "react";
import App from "../App";
import uniqid from "uniqid";
import Fishes from "./Fishes";




const Fish = (props) =>{
    
    
    return(
            <div className="fishCard">
            <img src={props.img} alt="fishMissing"/>
            </div>
    )
}

export default Fish;

