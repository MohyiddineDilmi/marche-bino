import React from 'react';
import styles from '../../modules/styles.module.css';

const TechnologyCard = ({ technologies }) => {
  const iconStyle = {
    background: 'linear-gradient(to right, #f12711, #f5af19)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    width: '40px',
  };

  return (
    <div
        style={{ width: '300px' }}
    >
      <img src={technologies.iconPath} alt="Custom Icon" style={iconStyle} />
      <h2 className={styles.title_black}>{technologies.title}</h2>
      <p className={styles.text_no_margin}> {technologies.description}</p>
    </div>
  );

};

export default TechnologyCard;
