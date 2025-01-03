import React from 'react';
import { useNavigate } from 'react-router-dom';
import './eventpage.css'; 
import Eventimage from './imges/abj.png'; 
import Card from './Card';
import eventData1 from './EventData';




const Eventpage = () => {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/eventdetail/${index}`);
  };

  return (
    <div className='event-page'>
      {/* Background Cover */}
      <div className='cover-event'>
        <img src={Eventimage} className='backgrounddd' alt='Event background'></img>
        <h2 className='text-on-photog'>OUR RECENT PROJECTS</h2>
      </div>

      {/* Card Grid */}
      <div className='card-container11'>
        {eventData1.map((event, index) => (
       <div key={index} onClick={() => handleCardClick(index)}>

          <Card
            key={index}
            image={event.image}
            title={event.title}
            subtitle={event.subtitle}
          />


</div>
          
        ))}
       </div>
    </div>
  );
}

export default Eventpage;
