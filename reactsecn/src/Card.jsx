import React from 'react'
import "./card.css"

function Card(props) {
  return (
    
    <div className="card">
      <img src={props.image} alt="Card image" />
      <h2>{props.title}</h2>
    <hr />
      <p> Description:{props.description}</p>
    </div>
  );
}
    
  


export default Card