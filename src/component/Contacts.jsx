import React from 'react';
import { FaMapMarkerAlt, FaPhone , FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons/fa
import './MapAndCall.css'; // Import your styles here

const Contacts = () => {
  const phoneNumber = '+251912070320'; // Replace with your phone number
  const googleMapsLink = 'https://www.google.com/maps?q=9.016260,38.738442'; // Google Maps URL
  const emailAddress = 'binimelisse@gmail.com';
  return (
    <div className="contacts-card">
      <h2 className="contacts-title">Contact Us</h2>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-link">
        <FaMapMarkerAlt className="icon" />
        <span className="text">View Location on Google Maps</span>
      </a>
      <a href={`tel:${phoneNumber}`} className="call-button">
        <FaPhone className="icon" />
        <span className="text">Call Us</span>
      </a>
      <a href={`mailto:${emailAddress}`} className="call-button">
        <FaEnvelope className="icon" />
        <span className="text">email Us</span>
      </a>
      <p className="phone-number">{phoneNumber}</p>
    </div>
  );
};

export default Contacts;
