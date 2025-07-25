import './about.css';
import MAINTENANCE from '../../assets/icon/backend-development.png'
import KARTHIRAJ from '../../assets/Karthir.jpg'
import DESIGN   from  '../../assets/icon/design.png'
import DEVELOPMENT from '../../assets/icon/images.jpg'

const About = () => {
  return (
    <section className="about-section">
     

      <h2 className="about-title">ABOUT ME</h2>
      <br></br>
 <img
        src={KARTHIRAJ}
        alt="Karthi Raj"
        className="about-avatar"
      />
      <p className="about-subtitle">
        I am a Front-end / Full Stack Developer with a focus on Microsoft 365 solutions. I specialize in building scalable applications using SharePoint Framework (SPFx), Power Apps, and React. With a strong understanding of modern UI/UX design principles, I create impactful, role-based enterprise tools for businesses.
        <br />
        <br />
        Currently working as a Junior Software Engineer at Technomax Systems India Pvt Ltd, I design and develop interactive dashboards, internal automation forms, and integrations with Microsoft Graph API.
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
            Skilled in responsive and modern UI/UX with HTML5, CSS3, and React.
            <br />
            Proficient in creating pixel-perfect designs and component-based layouts for seamless user experience.
          </p>
        </div>

        <div className="about-card">
          <img src={DEVELOPMENT} alt="Development Icon" className="card-icon" />
          <h3>DEVELOPMENT</h3>
          <p>
            Experienced in building SPFx web parts, Power Apps, and API integrations.
            <br />
            Strong ability to work with RESTful services and Microsoft Graph API for dynamic content delivery.
          </p>
        </div>

        <div className="about-card">
          <img src={MAINTENANCE} alt="Maintenance Icon" className="card-icon" />
          <h3>MAINTENANCE</h3>
          <p>
            Handle end-to-end delivery, version control with Git, and performance optimization.
            <br />
            Efficient in debugging, refactoring legacy code, and managing version upgrades in SharePoint solutions.
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
