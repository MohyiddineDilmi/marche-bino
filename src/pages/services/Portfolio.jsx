import React from 'react';
import VideoPlayerCard from '../../components/VideoPlayerCard';
import styles from '../../modules/styles.module.css';
import { useTranslation } from 'react-i18next';
import { padding } from '@mui/system';


const portfolioContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5rem 0rem 5rem 0rem'
};

function Portfolio() {

    const { t } = useTranslation();


  return (
    <>
        <h1 className={styles.title_secondary}>{t('cinematic')}</h1>
        <p className={styles.text}>{t('cinematic_description')}</p>
    <div style={portfolioContainerStyle}>
        
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/ns.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/v_1_poster.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.4.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/ns.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.4.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
                <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/ns.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.4.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
    </div>
    <h1 className={styles.title_secondary}>{t('fpv')}</h1>
    <p className={styles.text}>{t('fpv_porfolio_description')}</p>
    <div style={portfolioContainerStyle}>
    <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/ns.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/v_1_poster.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.4.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/ns.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.4.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
                <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/ns.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.4.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
        <VideoPlayerCard
            src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4"
            poster="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png"
        />
    </div>

    </>
    
  );
}

export default Portfolio;
