import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../assets/erelys_logo.svg';

const styles = {
  appBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2% 10% 2% 10%',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  logoImg: {
    height: '2rem',
  },
  responsive: {
    '@media screen and (max-width: 768px)': {
      appBarContainer: {
        flexDirection: 'column',
        padding: '2% 5%',
      },
      link: {
        margin: '1rem 0',
        marginRight: '0',
        padding: '0.2rem',
      },
      logoImg: {
        padding: '1rem',
      },
    },
  },
};

const sections = ['About Us', 'Technologies', 'Services', 'Contact Us'];

function AppBar() {
  return (
    <nav style={styles.appBarContainer}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoPath} alt="air-borne-logo" style={styles.logoImg} />
        </Link>
      </div>
    </nav>
  );
}

export default AppBar;
