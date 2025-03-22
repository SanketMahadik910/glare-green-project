import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Residential.css';

const projects = [
  { id: 1, name: 'Modern Glass Villa', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 2, name: 'solo', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 3, name: 'Urban Glass ', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 4, name: 'Urban Glass House', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 6, name: 'Urban Glass House', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 7, name: 'Urban Glass House', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 8, name: 'Urban Glass House', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 9, name: 'Urban Glass House', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
  { id: 10, name: 'Urban Glass House', image: 'https://cdn.prod.website-files.com/679b678d080aadecaa78b6ac/67a09b154683945b0cf22d92_hero-02.jpg' },
 
  // Add 8 more projects...
];

const Residential = () => {
  const location = useLocation();

  useEffect(() => {
    // Animation trigger on route change
    const timer = setTimeout(() => {
      document.querySelectorAll('.project-item').forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <div className="projects-page">
      <h1 className="page-title">Residential Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="project-item"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.name} 
                className="project-image"
              />
            </div>
            <h3 className="project-name">{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Residential;