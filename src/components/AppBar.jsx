import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../assets/erelys_logo.svg';
import LanguageSwitcher from './LanguageSwitcher';

const styles = {
  appBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  logoImg: {
    height: '2rem',
  },
  responsive: {
    '@media screen and (max-width: 768px)': {
      appBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // Center the items horizontally
        padding: '2rem 5%',
      },
      logoImg: {
        padding: '1rem',
      },
    },
  },
};

// const sections = ['About Us', 'Technologies', 'Services', 'Contact Us'];

function AppBar() {
  return (
    <nav
      style={{
        ...styles.appBarContainer,
        ...styles.responsive['@media screen and (max-width: 768px)']
          .appBarContainer,
      }}
    >
      <div>
        <Link to="/">
          <img src={logoPath} alt="air-borne-logo" style={styles.logoImg} />
        </Link>
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default AppBar;
