import React from 'react';
import { useTranslation } from 'react-i18next';
import StoreLocation from '../../components/StoreLocation';
import SimpleVideoPlayer from '../../components/SimpleVideoPlayer';
import './location.css'; // Import the CSS file

function Location() {
  const { t } = useTranslation();
  const binoLocation =
    'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/videos/bino_location.mp4';

  return (
    <div className="container">
      <div className="content">
        <StoreLocation />
        <div className="videoWrapper">
          <SimpleVideoPlayer videoSrc={binoLocation} />
        </div>
      </div>
    </div>
  );
}

export default Location;
