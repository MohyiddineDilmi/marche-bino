import React from 'react';
import AppBar from './AppBar';
import Header from './Header';
import ServicesList from './ServicesList';
import imgPath from '../../assets/header-img-2.png';
import Projects from './Projects';
import Footer from './Footer';
import Technologies from './Technologies';

function Home() {
    return (
        <>
        <div
            style={{
                backgroundColor: "black",
            }}
        >
            <AppBar/>
            <Header/>
            <ServicesList/>
        </div>
        <Technologies/>
        <div
            style={{
                backgroundColor: "black",
            }}
            >
            <Footer/>
        </div>
        </>
    );
}

export default Home;
