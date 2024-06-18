import React from 'react';
import styles from '../../modules/styles.module.css';
import { TypeAnimation } from 'react-type-animation';
import { height, maxHeight, width } from '@mui/system';

const TEXTS = ['creation', 'innovation', 'safety', 'excellence'];

const headerStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1rem',
    paddingTop: '4rem',
  },
  animatedText: {
    display: 'inline',
  },
  '@media (max-width: 768px)': {
    container: {
      margin: '0rem',
    },
  },
};

function Header() {

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.animatedText}>
        <h1 className={`${styles.title_primary_simple} responsive-title`}>
          <TypeAnimation
            sequence={[
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
    </header>
  );
}

export default Header;
