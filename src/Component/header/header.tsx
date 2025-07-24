import React from 'react';
import K from "../../assets/K.jpg";
import './header.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={K} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#about">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact" className="contact-button">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
