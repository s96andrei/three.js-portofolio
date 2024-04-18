import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const linkedInLink = "https://www.linkedin.com/in/andrei-stefanica-605992232/";

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <div className="navbar-links">
          <img className="navbar-logo" src="./img/a-logo-color.svg" alt="Logo" />
        </div>
        <div className="navbar-icons">
          <button className="navbar-button" onClick={() => handleLinkClick(linkedInLink)}>Hire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
