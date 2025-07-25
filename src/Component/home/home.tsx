import React from 'react';
import mail from "../../assets/Vector (2).svg";
import git from "../../assets/github symbol.svg";
import linkedin from "../../assets/linkedin symbol.svg";
import Karthi from "../../assets/karthi.jpg"
import { Link } from 'react-router-dom';
import'./home.css'
const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <div className="intro">
          <p>Hi, I am</p>
          <h1>Karthi Raj </h1>
          <h2>Front-end Developer / FullStack Developer</h2>
          <div className="social-icons">
            <a href="#"><img src={mail} alt="Email" /></a>
            <a href="#"><img src={git} alt="GitHub" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="profile-img">
          <img src={Karthi} alt="Profile" />
        </div>
      </div>

      <div className="bottom-bar">
        <div className="brand-name">IT BERRIES</div>
        <p className="description">
          Let’s build something amazing together.

Whether you have a question, want to collaborate, or just want to say hi, I’m open to opportunities and projects.

        </p>
        <Link to="/resume" className="read-more">READ MORE</Link>
      </div>
    </div>
  );
};

export default Home;