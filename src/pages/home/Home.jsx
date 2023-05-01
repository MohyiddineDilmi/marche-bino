import React from 'react';
import AppBar from './AppBar';
import Header from './Header';
import ServivesList from './ServicesList';
import imgPath from '../../assets/header-img.png';

function Home() {
    return (
        <>
        <div 
            style={{
                backgroundImage: `url(${imgPath})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "40rem"
            }}
        >
            <AppBar/>
            <Header/>
        </div>
        <div>
            <ServivesList/>
        </div>
            
        </>
    );
}

export default Home;
