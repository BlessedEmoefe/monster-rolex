import React from "react"
import "./card.style.css"

const Card = (props) =>{
return(
    <div className="card-container">
        <h2 >{props.individual.name}</h2>
    </div>
)
}
export default Card;