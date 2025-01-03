import React from 'react';
import './card.css'; 

const Card = ({ image, title, subtitle }) => {
  return (
    <div className='card12'>
      <img src={image} alt={title} className='card12-image' />
      <div className='card-overlay1'>
        <h3 className='card-title1'>{title}</h3>
        <p className='card-subtitle1'>{subtitle}</p>
        <button className='card-button1'>View</button>
      </div>
    </div>
  );
};

export default Card;
