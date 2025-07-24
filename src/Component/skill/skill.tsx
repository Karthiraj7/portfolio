import './skill.css';
import HTML from '../../assets/icon/html.png';
import CSS from '../../assets/icon/css.png'
import JAVASCRIPT from '../../assets/icon/javascript.jpg'
import TYPESCRIPT from '../../assets/icon/typescript.png';
import NODEJS from '../../assets/icon/nodejs.png'
import JQUERY from '../../assets/icon/jquery.png'
import SHAREPOINT from '../../assets/icon/sharepoint.webp'
import POWERAPPS from '../../assets/icon/Power-Apps-1.png'
import GIT from '../../assets/icon/Git-Icon-1788C 1.png'
import REACT from '../../assets/icon/react.jpg'

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">SKILLS</h2>

      <div className="skills-group">
        <h3>USING NOW:</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src={HTML} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <img src={CSS} alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="skill-item">
            <img src={JAVASCRIPT} alt="SASS" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill-item">
            <img src={TYPESCRIPT} alt="JavaScript" />
            <p>TYPESCRIPT</p>
          </div>
          <div className="skill-item">
            <img src={NODEJS} alt="React" />
            <p>NODEJS</p>
          </div>
          <div className="skill-item">
            <img src={JQUERY} alt="Bootstrap" />
            <p>JQUERY</p>
          </div>
          <div className="skill-item">
            <img src={REACT} alt="Git" />
            <p>REACT</p>
          </div>
           <div className="skill-item">
            <img src={SHAREPOINT} alt="Bootstrap" />
            <p>SHAREPOINT</p>
          </div>
           <div className="skill-item">
            <img src={POWERAPPS} alt="Bootstrap" />
            <p>POWERAPPS</p>
          </div>
          <div className="skill-item">
            <img src={GIT} alt="Git" />
            <p>GIT</p>
          </div>
         
        </div>
      </div>

      <div className="skills-group">
        <h3>LEARNING:</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="/images/nodejs.png" alt="Node.js" />
            <p>NODEJS</p>
          </div>
          <div className="skill-item">
            <img src="/images/mysql.png" alt="MySQL" />
            <p>MySQL</p>
          </div>
          <div className="skill-item">
            <img src="/images/mongodb.png" alt="MongoDB" />
            <p>MONGODB</p>
          </div>
          <div className="skill-item">
            <img src="/images/typescript.png" alt="TypeScript" />
            <p>TYPESCRIPT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
