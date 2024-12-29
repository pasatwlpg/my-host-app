import React, { useState, useEffect } from "react";
import "../assets/styles/Contact.css";

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
        Kontakt
      </button>
      {showContactInfo && (
        <div className="contact-info">
          <p>Telefon: +48 123 456 789</p>
          <p>Email: kontakt@example.com</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
