import React, { useState } from 'react';
import './GetStarted.css'; 
import FGHC from '../imges/abkl.png';

const FormPage = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    tickets: '',
    phoneNumber: '',
    email: '',
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
  };

  return (
    <div className="container2">
      <img src={FGHC } alt=" tt" className="background-image" /> 
    <div className="form-container">
      <div className="form-card">
        <form onSubmit={handleSubmit}>
 
        <label className='labelget'>Type the event name</label>
          <input className='inputtikit'
            type="text"
            name="eventName"
            placeholder="Type the event name"
            value={formData.eventName}
            onChange={handleInputChange}
            required
          />
           <label className='labelget' >Number of tickets</label>
           <input
  className="inputtikit"
  type="number"
  name="tickets"
  placeholder="Number of tickets"
  value={formData.tickets}
  onChange={(e) => {
    const value = e.target.value;
   
    if (/^\d*$/.test(value)) {
      handleInputChange(e); 
    }
  }}
  min="1" // الحد الأدنى للتذاكر 1
  required
/>

           <label className='labelget'>Your number</label>
          <input input className='inputtikit'
            type="tel"
            name="phoneNumber"
            placeholder="Your number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            
          />
           <label className='labelget'>enter your email</label>
          <input input className='inputtikit'
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="payment-methods">
            <p className='payment_methods'>Choose payment methods</p>
            <label>
              <input input className='inputtikit2'
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                onChange={handleInputChange}
                required
              />
                Credit Card </label>
            <label>
              <input input className='inputtikit23'
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={handleInputChange}
                required
              /> PayPal
            </label>
          </div>
          <button type="submit" className="submit-button">Save</button>
        </form>
       
      </div>
    </div>
   

    </div>
  );
};

export default FormPage;
