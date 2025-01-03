import React from 'react';
import { useInView } from 'react-intersection-observer';

const Event = ({ event, isActive, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`card ${isActive ? 'active' : ''} ${inView ? 'visible' : ''}`} 
      onClick={onClick}
    >
      <img src={event.img} alt={event.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{event.title}</h3>
        <p className="card-date">{event.date}</p>
        <p className="card-time">{event.time}</p>
        <p className="card-location">{event.location}</p>
        <p className="card-speaker">{event.speaker}</p>
      </div>
    </div>
  );
};

export default Event;
