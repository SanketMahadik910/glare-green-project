import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.3827422905824!2d73.78631567417403!3d18.69167506392727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b787a87bcbb3%3A0x7b3dfa588fa4313d!2sGlare%20Green%20Energy%20and%20Infra%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1742391811125!5m2!1sen!2sin" className={styles.map}
              allowFullScreen
              loading="lazy" ></iframe>
          
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input type="text" id="name" className={styles.formInput} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input type="email" id="email" className={styles.formInput} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea 
                id="message" 
                className={`${styles.formInput} ${styles.formTextarea}`}
                rows="5"
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