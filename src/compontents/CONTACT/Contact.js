import React from 'react';
import './Contact.css';
import Contact2 from './Contact2';
import Map from './Map';
const ContactSection = () => {
  return (
    <div>
    <section className="contact-section">
      <div className="overlay">
        <h1>GET IN TOUCH</h1>
        <p>
          We'd love to hear from you! If you have any questions, comments, or feedback, please don't hesitate to get in touch with us using the contact form below. 
          We'll do our best to get back to you as soon as possible. Thank you for your interest in Eventify! We look forward to hearing from you.
        </p>
      </div>
    </section>
    <Contact2/>
    <Map/>
    </div>
  );
};

export default ContactSection;
