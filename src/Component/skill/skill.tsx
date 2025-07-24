import './skill.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">SKILLS</h2>

      <div className="skills-group">
        <h3>USING NOW:</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="/images/html5.png" alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <img src="/images/css3.png" alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="skill-item">
            <img src="/images/sass.png" alt="SASS" />
            <p>SASS</p>
          </div>
          <div className="skill-item">
            <img src="/images/js.png" alt="JavaScript" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill-item">
            <img src="/images/react.png" alt="React" />
            <p>REACT</p>
          </div>
          <div className="skill-item">
            <img src="/images/bootstrap.png" alt="Bootstrap" />
            <p>BOOTSTRAP</p>
          </div>
          <div className="skill-item">
            <img src="/images/git.png" alt="Git" />
            <p>GIT</p>
          </div>
          <div className="skill-item">
            <img src="/images/figma.png" alt="Figma" />
            <p>FIGMA</p>
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
