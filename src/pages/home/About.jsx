import React from 'react';
import styles from '../../modules/styles.module.css';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import './location.css';

function About() {
  const { t } = useTranslation();
  const aboutDescription = t('about_description', { returnObjects: true });

  // Ref for the Distribution Bino image
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div>
      <div className="content">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <img
              src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/signature.png"
              alt="Signature"
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <p className={styles.text_dark_mode}>
              {t('distribution_bino_description')}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <motion.a
              href="https://distributionbino.com/"
              target="_blank"
              rel="noopener noreferrer"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/distribution_bino.png"
                alt="Distribution Bino"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
