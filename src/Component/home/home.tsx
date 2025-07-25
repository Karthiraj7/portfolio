import React from 'react';
import mail from "../../assets/Vector (2).svg";
import git from "../../assets/github symbol.svg";
import linkedin from "../../assets/linkedin symbol.svg";
import Karthi from "../../assets/karthi.jpg"
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
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra...
        </p>
        <a href="#" className="read-more">READ MORE</a>
      </div>
    </div>
  );
};

export default Home;