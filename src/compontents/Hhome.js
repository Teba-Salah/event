import React from 'react';
import './Hhmoe.css';
import Lastevent from './Lastevent';
import Byti from './Byti';
import Wevent  from './Wevent';
import Fqs from './Fqs';
import aboutimg from './imges/Frame 386.png'; 
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';


export function Hhmoe(props) {
 
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="homem">
      <div className="start">
        <div className="hero-content">
          <h1>The Ultimate Platform for Planning and Promoting Successful Events</h1>
          <p className='pl'>Eventify is a leading event and conference website that brings together industry experts, thought leaders, and enthusiasts from around the world to share knowledge, network, and make lasting connections.</p>
          <a className="see-more">
  <Link to="/About" className="link-text"> See more about us  →</Link>
</a>
        </div>
      </div>

      <section className="about-section">
        <div 
          className={`about-content ${textInView ? 'appear' : ''}`} 
          ref={textRef} 
          style={{ 
            transform: textInView ? 'translateX(0)' : 'translateX(-50px)' 
          }}
        >
          <h2 className='hh2'>WHO WE ARE</h2>
          <p className='pkj'>Eventify is a comprehensive platform for organizing and promoting events, conferences, and other industry-related gatherings. Our team of experienced professionals is dedicated to providing unparalleled event management solutions that streamline your event planning process and maximize your ROI.
             We believe that events are powerful tools for driving growth, innovation, and success, 
             and we're committed to helping you make the most of every event.</p>
          <button className="get-started"><Link to="/CreateYourEvent" >Get Started </Link> </button>
        </div>
        <div className={`about-image ${imageInView ? 'appear' : ''}`}
          ref={imageRef} 
          style={{ 
            transform: imageInView ? 'translateX(0)' : 'translateX(50px)'
          }}
        >
          <img src={aboutimg} alt="About Eventify" />
        </div>
      </section><Byti/>
     <Wevent/>
     <Lastevent/>
      <Fqs/>
      
     
      
    </div>
  );
};

export default Hhmoe;
