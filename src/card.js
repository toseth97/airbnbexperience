import React from "react";
import Data from './data'



export default function Cards(props){
    let badge
    if(props.openSource === 0){
        badge = "SOLD OUT"
    }
    else if(props.location === "Online"){
        badge = "Online"
    }
    
    return(
        <>
            <div className="card">
                {badge && <p className="badge">{badge}</p>}
                <img src={"./Images/"+props.img} alt="" className="product_img"/>
               <span>
                <h3 className="product_name">{props.name}</h3>
                    <p className="product_rating">{props.rating}</p>
               </span>
                <p className="product_desc">{props.description}</p>
                <span>
                    <p className="product_price">{'From $'+props.price}</p> 
                    <p className="product_location">{props.location}</p>
                </span>
            </div>
        </>
    )   
}