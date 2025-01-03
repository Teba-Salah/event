import React from 'react';
import './TicketCard.css'; 
import { Link } from 'react-router-dom';
const TicketCard = ({ price, perks, tier }) => {
  return (
    <div className="ticket-card">
      <h2>{tier} Package</h2>
      <h3>${price}</h3>
      <ul>
        {perks.map((perk, index) => (
          <li key={index}>{perk}</li>
        ))}
      </ul>
      <button> <Link to="/GetStarted" className='singgg'>Get started</Link> </button>
    </div>
  );
};

export default TicketCard;
