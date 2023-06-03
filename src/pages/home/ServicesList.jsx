import React from "react";
import styles from '../../modules/styles.module.css'
import './services-list.css';
import imgSrc0 from '../../assets/i-1.png'
import imgSrc1 from '../../assets/i-2.png'
import imgSrc2 from '../../assets/i-3.png'
import ImagePlayer from "../components/ImagePlayer";
import VideoPlayer from "../components/VideoPlayer";

const videoUrls = [
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-4_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-2_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-1_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-6_resized.mp4",
  ];

function ServicesList () {
    return (
        <>
            <div className="services_list">

                <div className='srvice-card'>
                    <VideoPlayer
                    videoUrls={videoUrls}/>
                    <div className='textContainer'>
                        <h1 className={styles.title_primary_white}>Cinematography and Videography</h1>
                        <p className={styles.text_dark_mode}>Airborne provides top-quality aerial cinematography and videography services for film, TV, marketing, and online content. We capture stunning footage and deliver a polished final product to meet your needs.</p>
                    </div>
                </div>

                <div className='srvice-card'>
                    <ImagePlayer images={[imgSrc0, imgSrc1, imgSrc2]} duration={5}/>
                    <div className='textContainer'>
                        <h1 className={styles.title_primary_white}>Aerial Photography</h1>
                        <p className={styles.text_dark_mode}>Airborne provides high-quality aerial photography services for a variety of purposes, including real estate, marketing, and events. The company's drones are equipped with high-resolution cameras that can capture stunning images from unique angles and perspectives.</p>
                    </div>
                </div>

            </div>
            
        </>
    );
}

export default ServicesList;