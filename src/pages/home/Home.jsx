import React from 'react';
import AppBar from './AppBar';
import Header from './Header';
import './home.css'
import ServicesList from './ServicesList';
import Footer from './Footer';
import Technologies from './Technologies';

const vBg = 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/full_bg.mp4';

function Home() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "black",
                }}
            >
                <div className="container">
                    <div className='overlayStyle'></div>
                    <video className='videoStyle' src={vBg} autoPlay loop muted/>

                    <div className='header-content'
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: '0'
                        }}
                    >

                        <AppBar/>
                        <Header/>
                    </div>
                </div>
               
                
                
                <ServicesList/>
                <Technologies/>
                <Footer/>

            </div>
        </>
    );
}

export default Home;
