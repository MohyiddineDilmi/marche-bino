import React from 'react';
import './services-list.css';
import styles from '../../modules/styles.module.css';
import imgSrc0 from '../../assets/i-1.png';
import imgSrc1 from '../../assets/i-2.png';
import imgSrc2 from '../../assets/i-3.png';
import imgSrc3 from '../../assets/i-4.png';
import imgSrc5 from '../../assets/i-6.jpg';
import ImagePlayer from '../components/ImagePlayer';
import VideoPlayer from '../components/VideoPlayer';

const videoUrls = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-4_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-2_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-1_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-6_resized.mp4',
];

const videoUrls_1 = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/__v_0.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/__v_3.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/__v_5.mp4',
];

const imgUrls = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_2.png',
];

function ServicesList() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="text-tech-container">
        <h1 className={styles.title_primary}>Our Services</h1>
        <p className={styles.text}>
          We offers top-quality drone services, specializing in Aerial
          photography, Cinematography and Videography. Quality, safety, and
          customer satisfaction are our top priorities.
        </p>
      </div>
      {/* <VideoPlayer videoUrls={videoUrls} /> */}
      <div className="services_list">
        <div className="srvice-card">
          <VideoPlayer
            title={'Visual Arts'}
            description={
              'Providing high-quality cinematography, videography, and aerial photography for events, real estate marketing, and creative projects.'
            }
            videoUrls={videoUrls}
          />
        </div>

        <div className="srvice-card">
          <ImagePlayer
            title={'Inspection and Surveying'}
            description={
              "Conducting comprehensive inspections and surveys for construction, infrastructure, agriculture, and environmental monitoring, with detailed reports and measurements."
            }
            images={imgUrls}
            duration={5}
          />
        </div>
      </div>

      {/* <VideoPlayer videoUrls={videoUrls} /> */}
      <div className="services_list">
        <div className="srvice-card">
          <ImagePlayer
            title={'Thermal and Infrared Imaging'}
            description={
              'Utilizing advanced thermography for heat detection, electrical inspections, fire support, and wildlife monitoring to ensure safety and efficiency.'
            }
            images={[imgSrc0, imgSrc1, imgSrc2, imgSrc5]}
            duration={5}
          />
        </div>

        <div className="srvice-card">
          <VideoPlayer
            title={'Mapping and Measurement'}
            description={
              'Delivering precise photogrammetry, land surveys, urban planning, and measurement services for accurate 3D modeling, mapping, and development projects.'
            }
            videoUrls={videoUrls_1}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
