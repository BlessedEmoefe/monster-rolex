import React from "react"
import "./cardlist.style.css"
import Card from "../card/Card"

const CardList = (props) =>{
    return(
        <div className="cardlist">
              {props.monster.map(individual=><Card key={props.monster.id} monster={individual} /> )}
        </div>
    )
}
export default CardList;