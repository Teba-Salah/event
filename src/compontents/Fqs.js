import React, { useState } from 'react';
import './Fqs.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I register for an event on Eventify?",
      answer: "Registering for an event on Eventify is easy! Simply visit the event page and click the 'Register Now' button. You'll be taken to a registration form where you can enter your details and purchase your ticket."
    },
    {
      question: "How can I become a speaker at an Eventify event?",
      answer: "To become a speaker, visit our Speakers page for guidelines and submit a proposal."
    },
    {
      question: "Can I cancel or transfer my event registration?",
      answer: "Yes, you can cancel or transfer your registration by following the steps outlined on our support page."
    },
    {
      question: "How can I become a sponsor of an Eventify event?",
      answer: "Interested in sponsoring? Contact our sponsorship team via our sponsorship page."
    },
    {
      question: "How can I get in touch with Eventify customer support?",
      answer: "For customer support, please visit our Contact Us page or reach out via support email."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2 >Get Answers to Your <span>Eventify Questions</span> with Our FAQs</h2>
      </div>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="faq-item"
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-arrow">{activeIndex === index ? '↑' : '↓'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p className='faq-answer'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
