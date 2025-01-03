import React from 'react';
import './BuyTICKETS.CSS';
import TicketCard from './TicketCard';

function App() {
  const ticketData = [
    {
      price: 50,
      tier: "Basic",
      perks: [
        "Access to all of our preferred access event",
        "Standard seating",
        "Access to basic amenities",
        "Early bird price available",
        "Exclusive access to VIP lounges ", 
        "Priority booking for special events"
        
       
      ]
    },
    {
      price: 100,
      tier: "Premium",
      perks: [
        "Access to all of our preferred access event",
        "Priority seating",
        "Access to premium amenities",
        "Free parking",
        "Complimentary refreshments",
        "Special merchandise",
        "Early bird price available"
      ]
    },
    {
      price: 150,
      tier: "VIP",
      perks: [
        "Access to all of our preferred access event",
        "VIP seating",
        "Exclusive access to VIP lounge",
        "Free parking",
        "Complimentary premium refreshments and snacks",
        "Priority check-in and registration",
       
      ]
    }
  ];
  
  return (
    
        
    <div className="App">
      <div className="ticket-container">
        {ticketData.map((ticket, index) => (
          <TicketCard
            key={index}
            price={ticket.price}
            perks={ticket.perks}
            tier={ticket.tier}
           className="sd"/>
        ))}
      </div>
    </div>
    
  );
}

export default App;