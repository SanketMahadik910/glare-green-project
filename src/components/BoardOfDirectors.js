import React from 'react';
import styles from '../styles/BoardOfDirectors.module.css';
import Footer from '../components/layout/Footer/Footer';

const directors = [
  {
    name: 'Anil Mahadik',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Founder & Chairman',
  },
  {
    name: 'Atul Mahadik',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Managing Director',
  },
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  } , 
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  } , 
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  } , 
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  } , 
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  } ,
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  } , 
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  } , 
  {
    name: 'Goyal',
    image: 'https://documents.bcci.tv/resizedimageskirti/164_compress.png',
    title: 'Director of Finance',
  }
];

const BoardOfDirectors = () => {
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.line}></div>
          <h1 className={styles.title}>Board Of Directors</h1>
          <p className={styles.description}>
            Visionary leadership, illustrious experience, and remarkable track record have been the signature of our legacy. 
            Browse this section to know more about our Board of Directors.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {directors.map((director, index) => (
            <div key={index} className={styles.card}>
              <img src={director.image} alt={director.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{director.name}</h3>
                <p className={styles.cardTitle}>{director.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BoardOfDirectors;
