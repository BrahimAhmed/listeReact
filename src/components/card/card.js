import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card">
        
        <img src={ require('./'+props.image) }/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        
    </div>

  );
}

export default Card;