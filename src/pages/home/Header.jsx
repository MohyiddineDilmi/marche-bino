import React from "react";
import './header.css'
import styles from '../../modules/styles.module.css'

const slogan = 'Taking your vision to new heights with innovation';
const description = 'Airborne offers top-quality drone services, specializing in aerial photography, surveying, inspections, and more. Our skilled team uses state-of-the-art technology to provide safe and efficient solutions for a variety of industries. Quality, safety, and customer satisfaction are our top priorities.'

function Header () {
    return (
        <header className="header-container">
            <h1 className={styles.title_primary}>{slogan}</h1>
            <p className={styles.text}>{description}</p>
        </header>
    );
}

export default Header;