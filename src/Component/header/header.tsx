import React from 'react';
import './header.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact" className="contact-button">CONTACT ME</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
