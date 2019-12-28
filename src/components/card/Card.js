import React from "react"
import "./card.style.css"

const Card = (props) =>{
return(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.individual.id}?set=set2&size=180x180`} />
        <h2 >{props.individual.name}</h2>
        <p>{props.individual.email}</p>
    </div>
)
}
export default Card;