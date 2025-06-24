// FeaturedProjects.jsx
import React from 'react';
import styles from '../styles/Project.module.css';
import { Link } from 'react-router-dom';


const Project = () => {
  const project = [
    { id: 1, title: 'Residential Tower', img: 'https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90b518a1248b38263566_salamanca-thumb.avif' ,path:"/reside" },
    { id: 2, title: 'Commercial Complex', img: 'https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90ef8e0f6b9fbc65dc7b_hadd-thumb.avif' },
    { id: 3, title: 'Hotel Development', img: 'https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90b518a1248b38263566_salamanca-thumb.avif' },
    { id: 4, title: 'Office Building', img: 'https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90b518a1248b38263566_salamanca-thumb.avif' },
    { id: 5, title: 'International Project', img: 'https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90b518a1248b38263566_salamanca-thumb.avif' },
    { id: 6, title: 'Sustainable Housing', img: 'https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90b518a1248b38263566_salamanca-thumb.avif' },
    { id: 7, title: 'Glass Innovation', img: 'https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90b518a1248b38263566_salamanca-thumb.avif' },
  ];

  return (
    <section className={styles["projects-section"]}>
      <div className={styles["container"]}>
        <h2 className={styles["section-title"]}>Featured Projects</h2>
        
        <div className={styles["projects-grid"]}>
          {project.map((project) => (
            <div key={project.id} className={styles["project-card"]}>
              <div 
                className={styles["project-image"]}
                 style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className={styles["image-overlay"]}>
                  <span className={styles["view-text"]} style={{color:"green"}}>GlareGreen</span>
                </div>
              </div>
              <h3 className={styles["project-title"]}>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;