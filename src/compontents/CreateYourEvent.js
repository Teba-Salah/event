import React, { useState, useRef } from "react";
import "./CreateYourEvent.css";

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDescription: "",
    startDate: "",
    startTime: "",
    location: "",
    speakerName: "",
    speakerBio: "",
    speakerEmail: "",
    eventImage: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null); // Reference for the image input field

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, eventImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the submitted data
    console.log("Form data submitted:", formData);

    // Disable the form after submission
    setIsSubmitted(true);

    // Reset the form fields after submission
    setFormData({
      eventTitle: "",
      eventDescription: "",
      startDate: "",
      startTime: "",
      location: "",
      speakerName: "",
      speakerBio: "",
      speakerEmail: "",
      eventImage: null,
    });

    // Reset the image input field
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <form className="special-event-form" onSubmit={handleSubmit}>
      <h2 className="eventform">Event Form</h2>

      <div className="special-form-group">
        <label>Event Title</label>
        <input
          type="text"
          name="eventTitle"
          placeholder="Event Title"
          value={formData.eventTitle}
          onChange={handleChange}
          required
          className="special-form-input"
          disabled={isSubmitted}
        />
      </div>

      <div className="special-form-group">
        <label>Event Description</label>
        <textarea
          name="eventDescription"
          className="special-form-textarea"
          placeholder="Event Description"
          value={formData.eventDescription}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        ></textarea>
      </div>

      <div className="special-form-group">
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
          className="special-form-input"
          disabled={isSubmitted}
        />
      </div>

      <div className="special-form-group">
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
          className="special-form-input"
          disabled={isSubmitted}
        />
      </div>

      <div className="special-form-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="special-form-input"
          disabled={isSubmitted}
        />
      </div>

      <div className="special-form-group">
        <label>Speaker Name</label>
        <input
          type="text"
          name="speakerName"
          placeholder="Speaker Name"
          value={formData.speakerName}
          onChange={handleChange}
          required
          className="special-form-input"
          disabled={isSubmitted}
        />
      </div>

      <div className="special-form-group">
        <label>Speaker Bio</label>
        <textarea
          name="speakerBio"
          className="special-form-textarea"
          placeholder="Speaker Bio"
          value={formData.speakerBio}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        ></textarea>
      </div>

      <div className="special-form-group">
        <label>Speaker Email</label>
        <input
          type="email"
          name="speakerEmail"
          placeholder="Speaker Email"
          value={formData.speakerEmail}
          onChange={handleChange}
          required
          className="special-form-input"
          disabled={isSubmitted}
        />
      </div>

      <div className="special-form-group">
        <label>Speaker Image</label>
        <input
          type="file"
          name="eventImage"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          required
          className="special-form-file"
          disabled={isSubmitted}
        />
      </div>

      <button type="submit" className="special-form-button" disabled={isSubmitted}>
        {isSubmitted ? "Submitted" : "Submit"}
      </button>
    </form>
  );
};

export default EventForm;
