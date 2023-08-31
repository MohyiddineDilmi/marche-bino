import React from "react";
import './header.css'
import styles from '../../modules/styles.module.css'
import TextTransition from 'react-text-transition'

const slogan = 'Taking your vision to new heights with ';
const description = 'Airborne offers top-quality drone services, specializing in Aerial photography, Cinematography and Videography. Quality, safety, and customer satisfaction are our top priorities.'
const TEXTS = ['creation', 'innovation', 'safety', 'excellence'];

function Header () {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <header className="header-container">
            <div className="animated-text">
                <h1 className={`${styles.title_primary_simple} responsive-title`}>
                    {slogan}
                    <TextTransition style={{ margin: "0 4px" }} inline>{TEXTS[index % TEXTS.length]}</TextTransition>
                </h1>
            </div>
            <p className={`${styles.text} responsive-description`}>{description}</p>
        </header>
    );
}

export default Header;
