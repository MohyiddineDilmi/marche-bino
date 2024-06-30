import React from 'react';
import styles from '../../modules/styles.module.css';
import { useTranslation } from 'react-i18next';
import StoreLocation from '../../components/StoreLocation';

function About() {
  const { t } = useTranslation();
  const aboutDescription = t('about_description', { returnObjects: true });

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '20px 0',
        }}
      >
        <div>
          <StoreLocation />
        </div>

        <div>
          <div>
            <h1 className={styles.title_primary_medium}>{t('about')}</h1>
            {Array.isArray(aboutDescription) ? (
              aboutDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className={styles.text_dark_mode}
                  style={{ marginTop: '10px' }}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className={styles.text_dark_mode}>{aboutDescription}</p>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px'
            }}
          >
            <img src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/signature.png" alt="Signature" />
          </div>        </div>
      </div>
    </div>
  );
}

export default About;
