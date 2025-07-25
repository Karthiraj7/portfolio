import './about.css';
import MAINTENANCE from '../../assets/icon/backend-development.png';
import KARTHIRAJ from '../../assets/Karthiraj.jpg';
import DESIGN from '../../assets/icon/design.png';
import DEVELOPMENT from '../../assets/icon/images.jpg';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">ABOUT ME</h2>
      <br />

      <img
        src={KARTHIRAJ}
        alt="Karthi Raj"
        className="about-avatar"
      />

      <p className="about-subtitle">
        Hi, I’m <strong>Karthi Raj</strong> — a passionate Front-end / Full Stack Developer specializing in Microsoft 365 technologies.
        <br /><br />
        I craft scalable, role-based enterprise applications using modern frameworks like SharePoint Framework (SPFx), React, and Power Platform tools. With a strong eye for UI/UX and responsive design, I transform business needs into smart, interactive tools.
        <br /><br />
        Currently, I work as a Junior Software Engineer at Technomax Systems India Pvt Ltd. I build custom dashboards, dynamic forms, and integrate Microsoft Graph API to deliver data-rich solutions that improve collaboration and productivity.
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
          <img src={DESIGN} alt="Design Icon" className="card-icon" />
          <h3>DESIGN</h3>
          <p>
            I design clean, modern interfaces using HTML5, CSS3, and React. Skilled in translating ideas into pixel-perfect layouts with a mobile-first approach.
            <br />
            My designs prioritize usability, performance, and visual impact.
          </p>
        </div>

        <div className="about-card">
          <img src={DEVELOPMENT} alt="Development Icon" className="card-icon" />
          <h3>DEVELOPMENT</h3>
          <p>
            I develop custom solutions with SPFx, Power Apps, and Microsoft Graph API.
            <br />
            Whether it’s building web parts or data-driven portals, I create secure and scalable applications tailored to business needs.
          </p>
        </div>

        <div className="about-card">
          <img src={MAINTENANCE} alt="Maintenance Icon" className="card-icon" />
          <h3>MAINTENANCE</h3>
          <p>
            I manage deployments, version upgrades, and ongoing enhancements. From debugging to performance tuning, I ensure solutions run reliably and evolve with your requirements.
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
