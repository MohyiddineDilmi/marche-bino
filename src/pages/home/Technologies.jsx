import React from 'react';
import './technologies.css';
import styles from '../../modules/styles.module.css';
import IconShape from '../../components/IconShape';
import Icon4k from '../../assets/icons/4k-icon.svg';
import IconAi from '../../assets/icons/ai-icon.svg';
import IconDrone from '../../assets/icons/drone-icon.svg';
import IconStream from '../../assets/icons/stream-icon.svg';
import IconFpv from '../../assets/icons/fpv-icon.svg';
import { useTranslation } from 'react-i18next';

const technologies = [
  {
    iconPath: `${Icon4k}`,
    title: 'high_resolution',
    description:
      'We can capture stunning aerial footage that will help you showcase your business or project.',
  },
  {
    iconPath: `${IconDrone}`,
    title: 'High-speed',
    description:
      'high-speed drone technology, which can capture footage at high speeds for action shots, sports events, and more.',
  },
  {
    iconPath: `${IconStream}`,
    title: 'Real-time streaming',
    description: 'you can join our flights and see the footages in real-time.',
  },
  {
    iconPath: `${IconFpv}`,
    title: 'FPV',
    description:
      'FPV technology allows for precise and immersive control of the drone.',
  },
  {
    iconPath: `${IconAi}`,
    title: 'AI and machine learning',
    description:
      'AI and machine learning algorithms for image and data analysis.',
  },
];

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '120px auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="text-tech-container">
        <h1 className={styles.title_primary}>{t('our_technologies')}</h1>
        <p className={styles.text}>{t('our_technologies_description')}</p>
      </div>

      <div className="techs-conatiner">
        <IconShape
          color="#FF6F07"
          title={t('high_resolution')}
          myIcon={technologies[0].iconPath}
          description={t('high_resolution_description')}
        />
        <IconShape
          color="#00D1FF"
          title={t('real_time_streaming')}
          myIcon={technologies[2].iconPath}
          description={t('real_time_streaming_description')}
        />
        <IconShape
          color="#18FF04"
          title={t('fpv')}
          myIcon={technologies[3].iconPath}
          description={t('fpv_description')}
        />
        <IconShape
          color="#AD00FF"
          title={t('ai_and_machine_learning')}
          myIcon={technologies[4].iconPath}
          description={t('ai_and_machine_learning_description')}
        />
      </div>
    </div>
  );
}
