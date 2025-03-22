// AboutUs.jsx
import React, { useState } from 'react';
import styles from './About.module.css'; // Import the CSS Module

const About = ({id}) => {
    const [more , setMore] = useState(false);
    function handleClick()
{
setMore(!more);

}
    return (
        <section id={id} className={styles['about-us']}>
            <div className={styles.container}>
                <h2 className={styles['section-title']}>About Us</h2>
                <button class={styles["button-39"]} role="button" onClick={handleClick}>More</button>
                {/* <button onClick={handleClick}>More</button>  */}
                

              { more && <p style={{color:"white"}}>Looking at the previous code for FeaturedProjects.jsx, each project is a card with an image. Replacing one of those images with the PhotoStack could work. However, the PhotoStack has its own structure and controls, which might not fit neatly into a grid item. Alternatively, maybe the PhotoStack is a modal that opens when clicking a grid item.

                    Wait, the user's previous message mentioned hover effects showing "view text." Maybe they want the PhotoStack to appear on hover or click of a grid item. But integrating the PhotoStack's animations within the grid might complicate the layout. </p>}

               <div className={styles['about-content']}>
               {more && 
               
                    <div className={styles['about-image']}>
                        <img
                            src="https://cdn.prod.website-files.com/678a7f00e68bbfadee34836c/678a90041739f0e85b238097_ella-thumb.avif"
                            alt="Our Facility"
                        />
                    </div>}
                    

                  { more && <div className={styles['about-text']}>
                        <h3 className={styles.subtitle}>Who We Are</h3>
                        <p className={styles.description}>
                            We create future architecture marvels by building them today.
                            committed to transforming the architectural landscape through
                            cutting-edge technology and eco-friendly practices.
                        </p>
                    </div>}
                </div>
            </div>
        </section>
    );
};

export default About;




