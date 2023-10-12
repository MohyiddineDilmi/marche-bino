import React from "react";
import './services-list.css';
import imgSrc0 from '../../assets/i-1.png'
import imgSrc1 from '../../assets/i-2.png'
import imgSrc2 from '../../assets/i-3.png'
import imgSrc3 from '../../assets/i-4.png'
import ImagePlayer from "../components/ImagePlayer";
import VideoPlayer from "../components/VideoPlayer";

const videoUrls = [
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-4_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-2_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-1_resized.mp4",
    "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-6_resized.mp4",
  ];

  function ServicesList() {
    return (
      <>
        {/* <VideoPlayer videoUrls={videoUrls} /> */}
        <div className="services_list">

          <div className='srvice-card'>
            <VideoPlayer videoUrls={videoUrls} />
          </div>

          <div className='srvice-card'>
            <ImagePlayer images={[imgSrc0, imgSrc1, imgSrc2, imgSrc3]} duration={5}/>
          </div>
        </div>
      </>
    );
  }
  
  export default ServicesList;