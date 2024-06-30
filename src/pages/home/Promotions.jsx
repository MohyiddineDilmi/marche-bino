import React from 'react';
import styles from '../../modules/styles.module.css';
import { useTranslation } from 'react-i18next';

import ThreeDImageSlider from '../../components/ThreeDImageSlider';

export default () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          maxWidth: '1080px',
          margin: '80px auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h1 className={styles.title_primary}>{t('promotions')}</h1>
          <p className={styles.text}>{t('our_services_description')}</p>
        </div>
        <div
          style={{
            maxWidth: '1080px',
            margin: '80px auto',
          }}
        >
          <ThreeDImageSlider />
        </div>
      </div>
    </>
  );
};
