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
    eventImage: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, eventImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      eventTitle,
      eventDescription,
      startDate,
      startTime,
      location,
      speakerName,
      speakerBio,
      speakerEmail,
    } = formData;

    if (
      !eventTitle ||
      !eventDescription ||
      !startDate ||
      !startTime ||
      !location ||
      !speakerName ||
      !speakerBio ||
      !speakerEmail
    ) {
      setStatus("Please fill out all required fields.");
      return;
    }

    console.log(formData);
    setStatus(" ");
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
  };

  return (
    <form className="unique-contact-form" onSubmit={handleSubmit}>
      <h2 className="eventform">Event Form</h2>

      <div className="unique-form-row">
        <input
          type="text"
          name="eventTitle"
          placeholder="Event Title"
          value={formData.eventTitle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="unique-form-row">
        <textarea
          name="eventDescription"
          className="unique-contact-textarea"
          placeholder="Event Description"
          value={formData.eventDescription}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="unique-form-row">
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="unique-form-row">
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        />
      </div>

      <div className="unique-form-row">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="unique-form-row">
        <input
          type="text"
          name="speakerName"
          placeholder="Speaker Name"
          value={formData.speakerName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="unique-form-row">
        <textarea
          name="speakerBio"
          className="unique-contact-textarea"
          placeholder="Speaker Bio"
          value={formData.speakerBio}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="unique-form-row">
        <input
          type="email"
          name="speakerEmail"
          placeholder="Speaker Email"
          value={formData.speakerEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div className="unique-form-row">
        <input
          type="file"
          name="eventImage"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      <button type="submit" className="unique-button">
        Submit
      </button>

      {status && <p className="status-message">{status}</p>}
    </form>
  );
};

export default EventForm;
