import React from 'react';
import './header.css';
import styles from '../../modules/styles.module.css';
import TextTransition from 'react-text-transition';

import { TypeAnimation } from 'react-type-animation';

const slogan = 'Taking your vision to new heights with ';
const description =
  'We offers top-quality drone services, specializing in Aerial photography, Cinematography and Videography. Quality, safety, and customer satisfaction are our top priorities.';
const TEXTS = ['creation', 'innovation', 'safety', 'excellence'];

function Header() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <header className="header-container">
      <div className="animated-text">
        <h1 className={`${styles.title_primary_simple} responsive-title`}>
          {/* {slogan}
                    <TextTransition style={{ margin: "0 4px" }} inline>{TEXTS[index % TEXTS.length]}</TextTransition>
                 */}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'Taking your vision to new heights with creation',
              1000,
              'Taking your vision to new heights with innovation',
              1000,
              'Taking your vision to new heights with safety',
              1000,
              'Taking your vision to new heights with excellence',
              1000,
            ]}
            speed={50}
            style={{
              // fontSize: '1em',
              // fontSize: '72px', // Corrected syntax
              fontFamily: 'NCTTorin-ExtraBold',
              textAlign: 'center',

              color: '#b78143',
              backgroundImage:
                '-webkit-linear-gradient(45deg, #b78143 0%, #e3e9a5 50%, #c1e0ad 100%, #2196f3 50%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
            repeat={Infinity}
          />
        </h1>
      </div>
      {/* <p className={`${styles.text_white} responsive-description`}>{description}</p> */}
    </header>
  );
}

export default Header;
