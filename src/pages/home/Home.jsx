import React from 'react';
import AppBar from './AppBar';
import Header from './Header';
import ServicesList from './ServicesList';
// import imgPath from '../../assets/header-img-2.png';
// import Projects from './Projects';
import Footer from './Footer';
import Technologies from './Technologies';
// import vBg from '../../assets/bg-video.mp4';


function Home() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "black",
                }}
            >
                {/* <video src={vBg} autoPlay loop muted
                    style={{
                        objectFit: 'cover',
                    }}
                />
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
                </div> */}
                
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
