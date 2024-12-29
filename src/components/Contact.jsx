import React, { useState, useEffect } from "react";
import "../assets/styles/Contact.css";
import { FaUsers } from "react-icons/fa";

function Contact() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = (e) => {
    e.stopPropagation(); 
    setShowContactInfo((prev) => !prev);
  };

  const closeContactInfo = () => {
    setShowContactInfo(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeContactInfo);

    return () => {
      document.removeEventListener("click", closeContactInfo);
    };
  }, []);

  return (
    <div className="contact-container">
      <button className="contact-button" onClick={toggleContactInfo}>
        Kontakt <FaUsers />
      </button>
      {showContactInfo && (
        <div className="contact-info">
          <p className="contact-napisy">Telefon: +48 123 456 789</p>
          <p className="contact-napisy">Email: kontakt@example.com</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
