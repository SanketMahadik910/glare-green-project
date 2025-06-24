import React, { useEffect, useState } from 'react';
import styles from './Innovation.module.css';
import Carousal from './Carousal.js';

const Innovation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (

    <>
      <div className={styles.innovationPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroText}>Innovation</h1>
          {/* <div className={styles.overlay}>
          <h1 className={styles.heroText}>Innovation</h1>
        </div> */}
        </section>

        {/* Content Section */}
        <section className={`${styles.contentSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.contentContainer}>
            <div className={styles.imageBox}>
              <img
                src="https://www.viridianglass.com/wp-content/uploads/2024/01/wp-content-uploads-2014-10-viridianglass_eaglemonthouse_003-600x360.jpg"
                alt="Innovation Work"
                className={styles.sideImage}
              />
            </div>
            <div className={styles.textBox}>
              <h2 className={styles.heading}>Leading the Future of Design</h2>
              <p className={styles.paragraph}>
                Our commitment to innovation is reflected in every project we deliver.
                Combining modern technology with creative thinking, we build solutions
                that go beyond expectations and redefine excellence in architecture.
              </p>
            </div>
          </div>
        </section>


        <section className={`${styles.contentSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.carouselContentLayout}>
            {/* Text on Left */}
            <div className={styles.textBlock}>
              <h2 className={styles.heading}>Where Imagination Meets Innovation</h2>
              <p className={styles.paragraph}>
                At the core of everything we build is an innovative spirit — one that dares
                to challenge the ordinary. We blend creativity, strategy, and engineering
                to create meaningful, lasting solutions that redefine industries and uplift
                everyday experiences.
              </p>
            </div>

            {/* Carousel on Right */}
            <div className={styles.carouselBlock}>
              <Carousal />
            </div>
          </div>
        </section>
      </div>


    </>

  );
};

export default Innovation;
