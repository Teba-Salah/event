
import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className='footerpp' >Stay up-to-date with the latest trends, strategies, and ideas in the world of business and leadership.</p>
        <button className='foo'> <Link to="/login" className="singgg">JOIN NOW</Link></button>
        </div>

        <div className="footer-section">
          <h4>EVENTIFY</h4>
          <ul>
            <li> <a href="#about"><Link to="/About">About us</Link></a></li>
            <li><Link to="/Event">All Events </Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Event">Events </Link></li>
            <li>Speakers <a href="#about"><Link to="/About">Speakers</Link></a></li>


          </ul>
        </div>

        <div className="footer-section">
          <h4>QUICK LINK</h4>
          <ul>
            <li> <a href="#create"><Link to="/CreateYourEvent">Make your Event</Link></a></li>
            <li><Link to="/BBlogs">Blogs </Link> </li>
            <li> <Link to="/Ti">Ticket</Link></li>
            <li><Link to="/Hhome">FAQ </Link></li>
            <li> <Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li>Terms and Conditions</li>
            <li>License Agreement</li>
            <li>Privacy Policy</li>
            <li>Copyright Information</li>
            <li>Cookies Policy</li>
            
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
      <p className="text">Copyright © 2023 Eventify, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;