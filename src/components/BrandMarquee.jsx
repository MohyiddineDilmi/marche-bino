import React from 'react';
import Marquee from 'react-fast-marquee';

// Example logos, replace with your actual brand logos
const brandLogos = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/brand_1.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/brand_2.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/brand_3.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/brand_4.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/brand_5.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/brand_6.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/brand_7.png',
];

const BrandMarquee = () => {
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '1080px',
        margin: '80px auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Marquee gradient={false} speed={30}>
        {brandLogos.map((logo, index) => (
          <div key={index} style={{ margin: '0 15px' }}>
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              style={{ height: '90px' }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
