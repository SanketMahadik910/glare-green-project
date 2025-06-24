// PhotoStack.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Animate.css';


const Animate = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);

  const images = [
    'https://assets.codepen.io/76888/01.jpg',
    'https://assets.codepen.io/76888/02.jpg',
    'https://assets.codepen.io/76888/05.jpg'
  ];

  const handleHoverStart = () => {
    setIsReady(false);
    setIsHovered(true);
    setTimeout(() => setIsReady(true), 600);
  };

  const handleImageHover = (index) => {
    if (isReady) setActiveIndex(index);
  };

  return (
    <article className="ps-container">
      <section 
        className={`ps-photoset ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleHoverStart}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((img, index) => (
          <img
            key={index}
            className={`ps-photo ${activeIndex === index ? 'active' : ''}`}
            src={img}
           
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => setActiveIndex(-1)}
            alt={`Project ${index + 1}`}
          />
        ))}
      </section>

      {/* <footer className="ps-controls">
        <div className="block">
          <input 
            id="corners"
            type="checkbox" 
            checked={corners}
            onChange={(e) => setCorners(e.target.checked)}
          />
         
        </div>
        <div className="block">
          <input 
            id="shadows" 
            type="checkbox" 
            checked={shadows}
            onChange={(e) => setShadows(e.target.checked)}
          />
          <label className="option-label" htmlFor="shadows">
            Shadows
          </label>
        </div>
      </footer> */}

      <div class="floating_btn" style={{ display:"none1"}}>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=+91-9175050112&amp;text=Hello Anil, I am looking for Windows">
                  <div class="contact_icon">
                     <i class="fa fa-whatsapp my-float"></i>
                  </div>
                </a>
                <p class="text_icon" style={{color:"white"}}>let's Chat</p>
              </div>
    </article>
  );
};

export default Animate;