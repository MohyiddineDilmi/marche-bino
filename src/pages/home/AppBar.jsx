import React from 'react';
import './app-bar.css'
import { Link } from 'react-router-dom';
import logoPath from '../../assets/air-borne-logo.svg';
import styles from '../../modules/styles.module.css'

const sections = ['About Us', 'Technologies', 'Services', 'Contact Us'];

function AppBar () {
  return (
        <nav className='app-bar-container'>
            <div className="logo">
                <Link to="/">
                    <img src={logoPath} alt='air-borne-logo'/>
                </Link>
            </div>
            <div className="links">
                {sections.map((section, index) => (
                    <Link key={index} className={`link ${styles.title}`} to={`/${section.toLowerCase()}`}>
                        {section}
                    </Link>
                ))}
            </div>
        </nav>
       
  );
}

export default AppBar;
