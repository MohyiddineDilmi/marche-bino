import React from 'react';
import { useState } from 'react';
import styles from '../modules/styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';


function ContactUs() {

  const { t } = useTranslation();

  const buttonStyle = {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    color: 'black',
    width: '20px',
    height: '20px',
  };

  const socialMediaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingTop: '1rem',
  };

  const [logo, setLogo] = useState(faClone);

  const handleButtonClick = () => {
    const textToCopy = 'info@marchebino.com';

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });

    setLogo(faCheck);

    // Reset the logo to its default value after 3 seconds
    setTimeout(() => {
      setLogo(faClone);
    }, 1000);
  };

  return (
    <>
      <div className="email-conatiner" style={socialMediaStyle}>
        <p className={styles.title}>info@marchebino.com</p>
        <button onClick={handleButtonClick} style={buttonStyle}>
          <FontAwesomeIcon icon={logo} style={iconStyle} />
        </button>
        <p className={styles.text_no_margin}>1951 Rue Jean-Talon E, Montréal, QC H2E 1T9</p>
        <p className={styles.title}>{t('phone_number')}</p>
        <p className={styles.text_no_margin}>5147284523</p>
      </div>

      <div className="social-media-container" style={socialMediaStyle}>
        {/* <button style={buttonStyle} onClick={() => window.open('YOUR_DISCORD_LINK')}>
            <FontAwesomeIcon icon={faDiscord} style={iconStyle}/>
          </button> */}
        <button
          style={buttonStyle}
          onClick={() =>
            window.open('https://marchebino.com/')
          }
        >
          <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        </button>
        {/* <button style={buttonStyle} onClick={() => window.open('YOUR_DISCORD_LINK')}>
            <FontAwesomeIcon icon={faYoutube} style={iconStyle}/>
          </button> */}
        <button
          style={buttonStyle}
          onClick={() => window.open('https://marchebino.com/')}
        >
          <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        </button>
        {/* <button style={buttonStyle} onClick={() => window.open('YOUR_DISCORD_LINK')}>
            <FontAwesomeIcon icon={faTwitter} style={iconStyle}/>
          </button> */}
      </div>
    </>
  );
}

export default ContactUs;
