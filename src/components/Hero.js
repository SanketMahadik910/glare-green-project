// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <div className="hero-overlay">
          <div className="hero-content">
            {/* <h2 className="welcome-text">Welcome to GlareGreen</h2> */}
            <h1 className="animated-text">Innovating for a sustainable future</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;