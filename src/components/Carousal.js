import React, { useEffect, useState } from 'react';
import styles from './Innovation.module.css';

const images = [
  {
    src: 'https://www.slidingdoorco.com/wp-content/uploads/Barn-Doors-Carousel-3-fixed-height.png',
    text: 'Innovate the Future',
  },
  {
    src: 'https://www.shutterstock.com/image-photo/glass-door-entrance-large-apartment-260nw-2483166471.jpg',
    text: 'Design with Purpose',
  },
  {
    src: 'https://t4.ftcdn.net/jpg/09/99/99/29/360_F_999992908_ciZ783zJ45ZzOlgYBpLCrbXps2iJX7Ik.jpg',
    text: 'Build for Impact',
  },
];

const Carousal = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {images.map((item, index) => (
        <div
          key={index}
          className={`${styles.carouselItem} ${index === current ? styles.active : ''}`}

        >
          <div className={styles.parallelogram}>
            <img src={item.src} alt={`Slide ${index}`} />
            <div className={styles.overlayText}>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousal;
