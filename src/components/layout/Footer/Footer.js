// Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic
    setEmail('');
  };

  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-grid"]}>
          {/* Left Section */}
          <div className={styles["footer-section"]}>
            <h3 className={styles["footer-heading"]}>Overview</h3>
            <ul className={styles["footer-links"]}>
              <li>
                <i className="ion-chevron-right" style={{ color: '#9d9d9d' }}></i>
                <a href="/about">About Us</a>
              </li>
              <li><a href="/board">Board of Directors</a></li>
              <li><a href="/awards">Awards & Recognition</a></li>
            </ul>
          </div>

          <div className={styles["footer-section"]}>
            <h3 className={styles["footer-heading"]}>Projects</h3>
            <ul className={styles["footer-links"]}>
              <li><a href="/residential">Residential</a></li>
              <li><a href="/commercial">Commercial & Hospitality</a></li>
            </ul>
          </div>

          <div className={styles["footer-section"]}>
            <h3 className={styles["footer-heading"]}>Infrastructure</h3>
            <ul className={styles["footer-links"]}>
              <li><a href="/design">Design & Engineering</a></li>
              <li><a href="/facility">Facility</a></li>
              <li><a href="/management">Project Management</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className={styles["footer-right"]}>
            <div className={styles["footer-section"]}>
              <a href="/login" className={styles["staff-login"]}>Staff Login</a>
              <form onSubmit={handleSubmit} className={styles["subscribe-form"]}>
                <input
                  type="email"
                  placeholder="Your Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
              <div className={styles["social-links"]}>
                <span>Follow Us On</span>
                <div className={styles["social-icons"]}>
                  <a href="#"><i className={styles["fab fa-facebook"]}></i></a>
                  <a href="#"><i className={styles["fab fa-linkedin"]}></i></a>
                  <a href="#"><i className={styles["fab fa-instagram"]}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["footer-bottom"]}>
          <p>© 2024 Glass Wall Systems. All rights reserved | Crafted by Matrix Bricks</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;