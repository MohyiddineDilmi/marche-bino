import React from 'react';

import './service-card.css';
import styles from '../../../modules/styles.module.css'
import videoSrc from '../../../assets/v-1.mp4'
import VideoPlayer from '../VideoPlayer'

function ServiveCard () {
    return (
        <>
            <div className='srvice-card'>
                <VideoPlayer videoSources={[videoSrc, videoSrc]} />
                <h1 className={styles.title_primary_white}>Cinematography and Videography</h1>
                <p className={styles.text}>Airborne provides top-quality aerial cinematography and videography services for film, TV, marketing, and online content. We capture stunning footage and deliver a polished final product to meet your needs.</p>
            </div>
        </>
    );
}

export default ServiveCard;