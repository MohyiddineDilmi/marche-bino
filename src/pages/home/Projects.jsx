import React from "react";
import YouTubePlayer from '../components/YouTubePlayer';
import './projects.css';
import styles from '../../modules/styles.module.css';

function Projects () {
    return (
        <>  
            <div className="text-container">
              <h1 className={styles.title_primary}>Some of our projects</h1>
              <p className={styles.text}>Airborne offers top-quality drone services, specializing in aerial photography, surveying, inspections, and more. Our skilled team uses state-of-the-art technology to provide safe and efficient solutions for a variety of industries. Quality, safety, and customer satisfaction are our top priorities.</p>
            </div>
            <div className={`${styles.flex_row} videos-list-container`}>
              <YouTubePlayer videoId="W7jtv2DlGs0" />
              <YouTubePlayer videoId="W7jtv2DlGs0" />
              <YouTubePlayer videoId="W7jtv2DlGs0" />
            </div>
        </>
    );
}

export default Projects;