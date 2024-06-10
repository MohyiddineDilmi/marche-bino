import React from 'react';
import AppBar from './AppBar';
import Header from './Header';
import './home.css';
import ServicesList from './ServicesList';
import Footer from './Footer';
import Technologies from './Technologies';
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import { useRef, useEffect } from 'react';

const vBg =
  // 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/full_bg.mp4';
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/bg_v_1.2.mp4';

function Home() {

  const COLORS = [
    '#AD00FF',
    '#00FFD1',
    '#00D1FF',
    '#FF6F07',
  ];

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(200% 150% at 0% 10%, #000000 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
        }}
      >
        <motion.div
          style={{
            background: backgroundImage,
            minHeight: '100vh',
            width: '100%',
          }}
        >
          <div className="container">
            <div className="overlayStyle"></div>
            <video className="videoStyle" src={vBg} autoPlay loop muted />
            <div
              className="header-content"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
              }}
            >
              <AppBar />
              <Header />
            </div>
          </div>
          <ServicesList />
          <Technologies />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default Home;
