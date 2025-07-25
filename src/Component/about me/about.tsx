import './about.css';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">ABOUT ME</h2>
      <p className="about-subtitle">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus.
        Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
      </p>

      <div className="explore-wrapper">
        <div className="divider-line" />
        <span className="explore-text">EXPLORE</span>
        <div className="divider-line" />
      </div>

      <div className="center-decorator">
        <span className="decorator-line" />
        <span className="decorator-icon">⋯</span>
        <span className="decorator-line" />
      </div>

      <div className="card-container">
        <div className="about-card">
          <h3>DESIGN</h3>
          <p>
            I can design the site based on your needs and suggestions.
            I can also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div className="about-card">
          <h3>DEVELOPMENT</h3>
          <p>
            I can develop the site based on your needs and suggestions.
            I can also build the site from scratch and consult you during the job.
          </p>
        </div>
        <div className="about-card">
          <h3>MAINTENANCE</h3>
          <p>
            I can maintain the site based on your needs and suggestions.
            I can also manage the site and consult you during the job.
          </p>
        </div>
      </div>

      <div className="center-decorator">
        <span className="decorator-line" />
        <span className="decorator-icon">⋯</span>
        <span className="decorator-line" />
      </div>
    </section>
  );
};

export default About;
