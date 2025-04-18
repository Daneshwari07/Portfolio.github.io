import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p><FaEnvelope className="icon" /> hanagandidaneshwari@gmail.com</p>
            <p><FaPhoneAlt className="icon" /> +91 9663251836</p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="Write your message here..."></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
