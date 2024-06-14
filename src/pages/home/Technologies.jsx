import React from 'react';
import './technologies.css';
import styles from '../../modules/styles.module.css';
import TechnologyCard from '../components/TechnologyCard';
import IconShape from '../components/IconShape';
import Icon4k from '../../assets/icons/4k-icon.svg';
import IconAi from '../../assets/icons/ai-icon.svg';
import IconDrone from '../../assets/icons/drone-icon.svg';
import IconStream from '../../assets/icons/stream-icon.svg';
import IconFpv from '../../assets/icons/fpv-icon.svg';

const technologies = [
  {
    iconPath: `${Icon4k}`,
    title: 'High-resolution',
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
        <h1 className={styles.title_primary}>Our Technologies</h1>
        <p className={styles.text}>
          With our unwavering focus on high-advanced technologies, we bring a
          new dimension to capturing stunning visuals from the skies.
        </p>
      </div>

      <div className="techs-conatiner">
        <IconShape color="#FF6F07" title={technologies[0].title} myIcon={technologies[0].iconPath} description={technologies[0].description} />
        {/* <IconShape color="#FF6F07" title={technologies[1].title} myIcon={technologies[1].iconPath} description={technologies[1].description}/> */}
        <IconShape color="#00D1FF" title={technologies[2].title} myIcon={technologies[2].iconPath} description={technologies[2].description}/>
        <IconShape color="#18FF04" title={technologies[3].title} myIcon={technologies[3].iconPath} description={technologies[3].description}/>
        <IconShape color="#AD00FF" title={technologies[4].title} myIcon={technologies[4].iconPath} description={technologies[4].description}/>
        {/* <TechnologyCard technologies={technologies[0]} />
        <TechnologyCard technologies={technologies[1]} />
        <TechnologyCard technologies={technologies[2]} />
        <TechnologyCard technologies={technologies[3]} />
        <TechnologyCard technologies={technologies[4]} /> */}
      </div>
    </div>
  );
}
