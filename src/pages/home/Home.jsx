import React from 'react';
import AppBar from '../../components/AppBar';
import Header from './Header';
import './home.css';
import Services from './Services';
import Footer from '../../components/Footer';
import Technologies from './Technologies';
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
  // const COLORS = ['#AD00FF', '#00FFD1', '#00D1FF', '#FF6F07'];
  const COLORS = useMemo(
    () => ['#FFAB2E', '#E764FC', '#FC6467', '#E72A15'],
    []
  );

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(200% 150% at 0% 10%, #fff 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
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
          <Services />
          <Technologies />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default Home;
