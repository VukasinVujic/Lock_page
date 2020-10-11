import React from "react";

const Contact = () => {
  return (
    <div>
      <p style={{ fontSize: "6vw", marginBotm: "50px" }}>Contact</p>
      <div className="logo-container">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="contact-container">
        <p className="aleksandar-contact name-container">
          Aleksandar Kovačević
        </p>
        <div className="mail-container">
          <a
            className="email-link"
            href="mailto:Aleksandar.Kovacevic@aol.co.uk"
          >
            Aleksandar.Kovacevic@aol.co.uk
          </a>
        </div>
        <p className="phone-number">0694375194</p>
      </div>
    </div>
  );
};

export default Contact;
