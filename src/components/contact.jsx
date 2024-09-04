// src/components/ContactMe.js
import React, { useState } from 'react';
import emailjs from "emailjs-com";
import './css/contact.css';

 export const Contact= () => {
    const [formData, setFormData] = useState({
      companyName: "",
      email: "",
      message: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const serviceID = "service_6tcw9sa";
      const templateID = "template_t0as8m7";
      const userID = "iQ_DNS5eIVpajR9wo";
  
      const formDataWithAttachment = new FormData();
      formDataWithAttachment.append("companyName", formData.companyName);
      formDataWithAttachment.append("email", formData.email);
      formDataWithAttachment.append("message", formData.message);
      formDataWithAttachment.append("attachment", formData.attachment);
  
      emailjs
        .sendForm(serviceID, templateID, e.target, userID)
        .then(
          (result) => {
            alert("Message sent successfully!");
            setFormData({
              companyName: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.error("Error:", error.text);
            alert("Failed to send the message, please try again.");
          }
        );
    };
  
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>Feel free to reach out to me via phone or email.</p>
          <p><strong>Phone:</strong> 8250526496 </p>
          <p><strong>Email:</strong> <a href="mailto:adutta441@gmail.com">adutta441@gmail.com</a></p>
          <p><strong>Address:</strong> Bankura , West Bengal</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name='companyName' type="text" id="name" placeholder="Your Name" onChange={handleInputChange } required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name='email' type="email" id="email" placeholder="Your Email" onChange={handleInputChange } required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name='message' id="message" placeholder="Your Message" rows="5" onChange={handleInputChange } required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};


