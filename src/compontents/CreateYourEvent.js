import React, { useState } from "react";
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
    relatedEventTitle: "",
    relatedEventDate: "",
    relatedEventLocation: "",
    eventImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, eventImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      if (key !== "eventImage") {
        formDataToSend.append(key, formData[key]);
      }
    }

    if (formData.eventImage) {
      formDataToSend.append("eventImage", formData.eventImage);
    }

    fetch("https://your-backend-url.com/api/events", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="special-event-form">
      <h2 className="eventform">Event Form</h2>

      <div className="special-form-group">
        <label>Event Title</label>
        <input
          type="text"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleChange}
          className="special-form-input"
          placeholder="Enter event title"
          required
        />
      </div>

      <div className="special-form-group">
        <label>Event Description</label>
        <textarea
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          className="special-form-textarea"
          placeholder="Enter event description"
          required
        />
      </div>

      <div className="special-form-group">
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="special-form-input"
          required
        />
      </div>

      <div className="special-form-group">
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          className="special-form-input"
          required
        />
      </div>

      <div className="special-form-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="special-form-input"
          placeholder="Enter location"
          required
        />
      </div>

      <div className="special-form-group">
        <label>Speaker Name</label>
        <input
          type="text"
          name="speakerName"
          value={formData.speakerName}
          onChange={handleChange}
          className="special-form-input"
          placeholder="Enter speaker's name"
          required
        />
      </div>

      <div className="special-form-group">
        <label>Speaker Bio</label>
        <textarea
          name="speakerBio"
          value={formData.speakerBio}
          onChange={handleChange}
          className="special-form-textarea"
          placeholder="Enter speaker's bio"
          required
        />
      </div>

      <div className="special-form-group">
        <label>Speaker Email</label>
        <input
          type="email"
          name="speakerEmail"
          value={formData.speakerEmail}
          onChange={handleChange}
          className="special-form-input"
          placeholder="Enter speaker's email"
          required
        />
      </div>


     


      <div className="special-form-group special-file-upload">
        <label>Event Image</label>
        <input
          type="file"
          name="eventImage"
          onChange={handleFileChange}
          className="special-form-file"
          accept="image/*"
        />
      </div>

      <button type="submit" className="special-form-button">Submit</button>
    </form>
  );
};

export default EventForm;

