import React from 'react';
import AppBar from '../../components/AppBar';
import Header from './Header';
import './home.css';
import Services from './Services';
import Footer from '../../components/Footer';
import BrandMarquee from '../../components/BrandMarquee';
import Promotions from './Promotions';
import About from './About';
import Location from './Location';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import { useEffect, useMemo } from 'react';
import SEO from '../../components/SEO';

const vBg =
  // 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/binovideos/full_bg.mp4';
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/videos/bg_video.mp4';

function Home() {
  // const COLORS = ['#1E90FF', '#00FFD1', '#00D1FF', '#FFD700'];
  const COLORS = useMemo(
    () => ['#FFD700', '#32CD32', '#FC6467', '#1E90FF'],
    []
  );

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(200% 120% at 20% 10%, #fff 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color, COLORS]);

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <SEO
          title="Marche Bino: Your Neighborhood Market"
          description="Discover Marche Bino: Your Neighborhood Market for Freshness, Quality, Convenience, and Variety."
          url="https://www.marchebino.com/"
          image="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/seo.png"
        />
        <motion.div
          style={{
            background: backgroundImage,
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            zIndex: 1,
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
          <div
            style={{
              maxWidth: '1080px',
              margin: '80px auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Services />
            <Promotions />
            <BrandMarquee />
            <Location />
            <About />
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default Home;
