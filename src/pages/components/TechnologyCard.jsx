import React, { memo } from 'react';
import styles from '../../modules/styles.module.css';

const iconStyle = {
  width: '60px',
  color: '#18FF04',
};

const TechnologyCard = memo(({ technologies }) => {
  return (
    <div style={{ width: '260px' }}>
      <img src={technologies.iconPath} alt="Custom Icon" style={iconStyle} />
      <h2 className={styles.title_white}>{technologies.title}</h2>
      <p className={styles.text_no_margin}>{technologies.description}</p>
    </div>
  );
});

export default TechnologyCard;
