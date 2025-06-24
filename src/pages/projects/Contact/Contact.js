// Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;

    }

    emailjs.send(
      'service_wge5t7c',       // Your service ID
      'template_sccaq64',      // Your template ID 
      formData,                // The object with name, email, message
      'AprYzuEl4Kx97prDz'      // Your public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      },
      (error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      }
    );
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Let's Connect</h2>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>GlassDealer Headquarters</h3>
            <address className={styles.address}>
              <p>123 Glass Tower Avenue</p>
              <p>Suite 4500</p>
              <p>New York, NY 10001</p>
              <br />
              <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
              <p>Email: <a href="mailto:info@glassdealer.com">info@glassdealer.com</a></p>
            </address>

            <div className={styles.socialLinks}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
                <a href="#" className={styles.socialLink}>Twitter</a>
                <a href="#" className={styles.socialLink}>Instagram</a>
              </div>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe 
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-74.00625808459399!3d40.71277567933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1622541456958!5m2!1sen!2sin"
              className={styles.map}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input 
                type="text" 
                id="name" 
                className={styles.formInput}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                className={`${styles.formInput} ${styles.formTextarea}`}
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
