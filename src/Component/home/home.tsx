import React from 'react';
import'./home.css'
const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <div className="intro">
          <p>Hi, I am</p>
          <h1>Tomasz Gajda</h1>
          <h2>Front-end Developer / UI Designer</h2>
          <div className="social-icons">
            <a href="#"><img src="email-icon.png" alt="Email" /></a>
            <a href="#"><img src="github-icon.png" alt="GitHub" /></a>
            <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      <div className="right-section">
        <nav className="nav">
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <button className="contact-btn">Contact Me</button>
        </nav>
        <div className="profile-img">
          <img src="your-photo.png" alt="Profile" />
          <p className="note">this is not my photo, but I dearly hope to get one just like this</p>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="brand-name">IT BERRIES</div>
        <p className="description">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra...
        </p>
        <a href="#" className="read-more">READ MORE</a>
      </div>
    </div>
  );
};

export default Home;