import React from 'react';



const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.alt}/>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  )  
}

export default Card;