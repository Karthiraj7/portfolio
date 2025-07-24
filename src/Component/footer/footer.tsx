import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <a href="#top" className="back-to-top">↑ BACK TO TOP</a>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:example@example.com">
          <i className="far fa-envelope"></i>
        </a>
      </div>

      <p className="footer-text">©2020 Tomasz Gajda All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
