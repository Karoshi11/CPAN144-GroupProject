import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="page-container">
      <main className="about-page">
        <section className="about-section">
          <h1>About TaskMaster</h1>
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                TaskMaster helps you organize your daily tasks efficiently with a clean, intuitive interface.
                We believe in simplicity and productivity without unnecessary complexity.
              </p>
              
              <h2>Features</h2>
              <ul className="features-list">
                <li>Create, edit, and delete tasks</li>
                <li>Mark tasks as complete</li>
                <li>Dark/Light mode toggle</li>
                <li>Responsive design for all devices</li>
                <li>Task details and descriptions</li>
              </ul>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <span>TaskMaster Screenshot</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="member-card">
              <div className="member-avatar"></div>
              <h3>Jospeh Kim</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="member-card">
              <div className="member-avatar"></div>
              <h3>Andre Martins</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="member-card">
              <div className="member-avatar"></div>
              <h3>Mike Johnson</h3>
              <p>Backend Developer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}