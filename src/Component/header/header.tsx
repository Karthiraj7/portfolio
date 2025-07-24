import React, { useState } from 'react';
import K from "../../assets/K.jpg";
import './header.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={K} alt="Logo" />
      </div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Mobile order: Portfolio, Contact Me, Skills, About me */}
       
        <li><a href="#skills">Skills</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
      
        <li><a href="#about">About me</a></li>
          <li><a href="#contact" className="contact-button">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
