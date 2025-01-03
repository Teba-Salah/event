import React, { useState, useEffect } from 'react';
import './Byti.css';
import { Link } from 'react-router-dom';
const ConferenceTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-15T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-containert">
      <h4 className="event-title2">JOIN US FOR OUR UPCOMING EVENT!</h4>
      <h5 className="event-subtitle">The Future of Technology Conference</h5>
      <div className="timer-display">
        <div className="time-segment">
          <span>{timeLeft.days || 0}</span>
          <p>DAYS</p>
        </div>
        <div className="time-segment">
          <span>{timeLeft.hours || 0}</span>
          <p>HOURS</p>
        </div>
        <div className="time-segment">
          <span>{timeLeft.minutes || 0}</span>
          <p>MINUTES</p>
        </div>
        <div className="time-segment">
          <span>{timeLeft.seconds || 0}</span>
          <p>SECONDS</p>
        </div>
      </div>
      <p className="event-details">April 15-17, 2025</p>
      <p className="event-details">San Francisco, California</p>
      <div className="action-buttons">
      
     
        <button className="event-ticket-btn"><Link to="/Ti" className="link-text"> BUY TICKET </Link></button>
      </div>
    </div>
  );
};

export default ConferenceTimer;
