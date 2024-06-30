import React from 'react';
import './services.css';
import styles from '../../modules/styles.module.css';
import { useTranslation } from 'react-i18next';
import ImagePlayer from '../../components/ImagePlayer';
import VideoPlayer from '../../components/VideoPlayer';


const videoUrls = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/videos/v_1.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/videos/v_2.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/videos/v_3.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/videos/v_4.mp4',
];


const imgUrls = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/services_img_1.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/services_img_2.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/services_img_3.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/services_img_4.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/services_img_5.png',
];

function Services() {
  const { t } = useTranslation();

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
        <h1 className={styles.title_primary}>{t('our_services')}</h1>
        <p className={styles.text}>{t('our_services_description')}</p>
      </div>
      {/* <VideoPlayer videoUrls={videoUrls} /> */}
      <div className="services_list">
        <div className="srvice-card">
          <VideoPlayer
            title={t('section_1')}
            description={t('section_1_description')}
            videoUrls={videoUrls}
          />
        </div>

        <div className="srvice-card">
          <ImagePlayer
            title={t('section_2')}
            description={t('section_2_description')}
            images={imgUrls}
            duration={5}
          />
        </div>
      </div>

      
    </div>
  );
}

export default Services;
