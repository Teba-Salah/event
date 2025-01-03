import React, { useState } from 'react';
import './Contact2.css';

const UniqueContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // Status message for form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const { firstName, lastName, email, phoneNumber, message } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      setStatus('Please fill out all required fields.');
      return;
    }

    // Process form submission
    console.log(formData);
    setStatus('Data submitted successfully!');
    // Reset fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <form className="unique-contact-form" onSubmit={handleSubmit}>
      <div className="unique-form-row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="unique-form-row">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="unique-form-row">
        <textarea
          name="message"
          className="unique-contact-textarea"
          placeholder="Message/Questions"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="unique-button">Book Now</button>
      {status && <p className="status-message">{status}</p>}
    </form>
  );
};

export default UniqueContactForm;
