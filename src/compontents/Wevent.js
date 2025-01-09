import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import './Wevent.css';
import { Link } from 'react-router-dom';

const EventSlider = () => {
  const events = [
    {
      date: '14 AUG 2023',
      title: 'Future Leaders Summit',
      details: [
        { icon: <FaCalendarAlt />, text: 'August 14-15, 2025' },
        { icon: <FaClock />, text: '9:00 AM - 10:00 AM' },
        { icon: <FaMapMarkerAlt />, text: 'Grand Ballroom, Hilton Hotel' },
        { icon: <FaUser />, text: 'Jenna Smith' },
      ],
      buttonColor: '#C38FFF',
      image: 'https://i.pinimg.com/564x/c1/39/52/c13952389b60fe650dd2a449bd8c337b.jpg',
    },
    {
      date: '16 AUG 2023',
      title: 'Future Leaders Summit',
      details: [
        { icon: <FaCalendarAlt />, text: 'August 16, 2025' },
        { icon: <FaClock />, text: '10:00 AM - 4:00 PM' },
        { icon: <FaMapMarkerAlt />, text: 'Gallery Room, Shangri-La Hotel' },
        { icon: <FaUser />, text: 'Robert Paul Stones' },
      ],
      image: 'https://i.pinimg.com/564x/39/2a/1f/392a1f7c2f344be4f6942d224fa14173.jpg',
    },
    {
      date: '23 AUG 2023',
      title: 'Future Leaders Summit',
      details: [
        { icon: <FaCalendarAlt />, text: 'August 23, 2025' },
        { icon: <FaClock />, text: '1:00 PM - 2:00 PM' },
        { icon: <FaMapMarkerAlt />, text: 'Emerald Room, Marriott Hotel' },
        { icon: <FaUser />, text: 'Peter Jones, Johnson Lee, and Mary Lou' },
      ],
      image: 'https://i.pinimg.com/564x/dd/32/b0/dd32b07fef30a262d6e710e0032dbf02.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const { title, details, image } = events[currentSlide];

  const checkVisibility = () => {
    const rect = sliderRef.current.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className={`unique-slider ${isVisible ? 'slider-visible' : ''}`} ref={sliderRef}>
      <div className="unique-event-info">
        <h2 className='unique-t'>EVENT</h2>
        <div className="unique-event-item">
    
          <div className="unique-event-content">
            <h3 className="unique-event-title1">{title}</h3>
            <ul className="unique-event-details">
              {details.map((detail, index) => (
                <li key={index} className="unique-detail-item">
                  {detail.icon} <span>{detail.text}</span>
                </li>
              ))}
            </ul>
            <button className="unique-buy-button4">
              <Link to="/Ti" className="unique-link-text4"> BUY TICKET </Link>
            </button>
          </div>
        </div>
        <div className="unique-slider-controls1">
          <button onClick={prevSlide}>&lt;</button>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>
      <div
        className="unique-event-image"
        style={{
          backgroundImage: `url(${image})`,
          transition: 'background-image 0.5s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default EventSlider;
