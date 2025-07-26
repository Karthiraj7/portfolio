import React from 'react';
import './Resume.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaTimesCircle,
} from 'react-icons/fa';

import Profile from '../../assets/karthi.jpg';
import CV from '../../assets/pdf/Karthi_Raj_KR_resume.pdf';
import Swal from 'sweetalert2';

const handleDownload = () => {
  Swal.fire({
    icon: 'success',
    text: 'Your CV is now downloaded.',
    timer: 2000,
    showConfirmButton: false,
  });

  const link = document.createElement('a');
  link.href = CV;
  link.download = 'Karthi_Raj_KR_Resume.pdf';
  link.click();
};

 const handleClose = () => {
    window.location.href = "/App"; // This navigates back to App ("/")
  };
const Resume: React.FC = () => {
  return (
    <>
      {/* Top Action Buttons */}
      <div className="resume-top-buttons">
        <div className="download-cv-sidebar">
          <button onClick={handleDownload} title="Download CV">
            <FaDownload /> <span>Download CV</span>
          </button>
        </div>

        <div className="resume-close-icon">
         <button
       onClick={handleClose}
        title="Back to Home"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <FaTimesCircle />
      </button>

        </div>
      </div>

      {/* Resume Outer Container */}
      <div className="resume-outer">
        <div className="resume-inner">

          {/* Sidebar */}
          <aside className="resume-sidebar">
            <div className="profile-pic-wrap">
              <img src={Profile} alt="Karthi Raj" className="profile-pic" />
            </div>

            <div className="sidebar-section">
              <h3>Contact</h3>
              <ul>
                <li><FaEnvelope /> karthirajkr2001@gmail.com</li>
                <li><FaPhoneAlt /> +91 78119 41616</li>
                <li><FaLinkedin /> linkedin.com/in/karthiraj</li>
                <li><FaGithub /> github.com/karthirajkr</li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>Technical Skills</h3>
              <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript, jQuery</p>
              <p><strong>Frameworks:</strong> React.js, SPFx, PnP.js</p>
              <p><strong>Microsoft 365:</strong> SharePoint Online, Power Apps, Power Automate</p>
              <p><strong>APIs:</strong> Microsoft Graph API, REST APIs</p>
              <p><strong>Tools:</strong> Git, VS Code, SharePoint Designer</p>
            </div>

            <div className="sidebar-section">
              <h3>Languages</h3>
              <p>English</p>
              <p>Tamil</p>
            </div>
          </aside>

          {/* Main Resume Content */}
          <main className="resume-main">
            <header>
              <h1>Karthi Raj KR</h1>
              <p>Microsoft 365 Developer | SPFx | Power Platform | React</p>
            </header>

            <section className="resume-section">
              <h2>🎯 Career Objective</h2>
              <p>
                As a Microsoft 365 and SharePoint Developer, I focus on building scalable, user-centered business tools using SPFx, Power Apps, and Graph API. I strive to modernize business processes by combining low-code platforms with custom development. I aim to grow in a collaborative and innovative environment where I can contribute technical expertise and solve real-world business challenges.
              </p>
            </section>

            <section className="resume-section">
              <h2>💼 Professional Experience</h2>
              <h4>Junior Software Engineer – Technomax Systems India Pvt Ltd</h4>
              <p className="job-period">Jan 2024 – Present</p>
              <ul>
                <li>Developed SPFx web parts with React and PnP.js to enhance SharePoint UX and data interactivity.</li>
                <li>Created Power Apps for request automation with SharePoint list integration and role-based views.</li>
                <li>Integrated Microsoft Graph API to securely access user profile and calendar data.</li>
                <li>Designed approval workflows using Power Automate for multi-stage requests.</li>
                <li>Maintained Git repositories using structured branching and clean commit practices.</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>📁 Key Projects</h2>
              <h4>SKMCA Forms Automation</h4>
              <ul>
                <li>Built Power Apps forms for Meal, Uniform, and Transport requests integrated with SharePoint.</li>
                <li>Used Microsoft Graph API for user data; routed approvals through Power Automate.</li>
                <li>Created dashboards and reports with role-based filtering for Admin and HR teams.</li>
              </ul>
              <h4>Dashboard Tracker App</h4>
              <ul>
                <li>Built real-time dashboard using SPFx, React, and SharePoint Lists.</li>
                <li>Included Excel export, dynamic filtering, and conditional formatting using Designer + PnP.js.</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>🎓 Education</h2>
              <p><strong>Bachelor of Engineering (Mechanical Engineering)</strong></p>
              <p>Coimbatore Institute of Technology, Tamil Nadu</p>
              <p>2018 – 2022 | CGPA: 70%</p>
              <ul>
                <li>Completed academic mini-projects involving automation and design.</li>
                <li>Participated in IT workshops and software-focused internships.</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>🖋️ Declaration</h2>
              <p>
                I hereby declare that the information provided above is accurate and complete to the best of my knowledge.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Resume;
