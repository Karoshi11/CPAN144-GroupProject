import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="page-container">
      <main className="contact-page">
        <section className="contact-section">
          <h1>Contact Us</h1>
          
          <div className="contact-content">
            <div className="contact-form">
              <h2>Send us a message</h2>
              <form className="form-container">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Subject" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your message"></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <h3>Email</h3>
                <p>contact@taskmaster.com</p>
              </div>
              
              <div className="info-item">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="info-item">
                <h3>Address</h3>
                <p>123 Productivity Street<br />Toronto, ON XYZ104</p>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">Twitter</a>
                  <a href="#" className="social-icon">Facebook</a>
                  <a href="#" className="social-icon">Instagram</a>
                  <a href="#" className="social-icon">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}