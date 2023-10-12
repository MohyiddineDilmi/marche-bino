import React from "react";
import './technologies.css';
import styles from '../../modules/styles.module.css';
import TechnologyCard from "../components/TechnologyCard";
import Icon4k from '../../assets/icons/4k-icon.svg';
import IconAi from '../../assets/icons/ai-icon.svg'
import IconDrone from '../../assets/icons/drone-icon.svg'
import IconStream from '../../assets/icons/stream-icon.svg'
import IconFpv from '../../assets/icons/fpv-icon.svg'

const technologies = [
    {
        iconPath: `${Icon4k}`,
        title: 'High-resolution cameras and lenses',
        description: 'We can capture stunning aerial footage that will help you showcase your business or project.',
    },
    {
        iconPath: `${IconDrone}`,
        title: 'high-speed',
        description: 'high-speed drone technology, which can capture footage at high speeds for action shots, sports events, and more.',
    },
    {
        iconPath: `${IconStream}`,
        title: 'Real-time streaming',
        description: 'you can join our flights and see the footages in real-time.',
    },
    {
        iconPath: `${IconFpv}`,
        title: 'FPV',
        description: 'FPV technology allows for precise and immersive control of the drone.',
    },
    {
        iconPath: `${IconAi}`,
        title: 'AI and machine learning',
        description: 'AI and machine learning algorithms for image and data analysis.',
    },
];

export default function Technologies () {
    return (
        <>
            <div className="text-tech-container">
              <h1 className={styles.title_primary}>Our Technologies</h1>
              <p className={styles.text}>With our unwavering focus on high-advanced technologies, we bring a new dimension to capturing stunning visuals from the skies.</p>
            </div>
            
            <div className="techs-conatiner">
                <TechnologyCard  technologies={technologies[0]}/>
                <TechnologyCard  technologies={technologies[1]}/>
                <TechnologyCard  technologies={technologies[2]}/>
                <TechnologyCard  technologies={technologies[3]}/>
                <TechnologyCard  technologies={technologies[4]}/>
            </div>
        </>
    )
}