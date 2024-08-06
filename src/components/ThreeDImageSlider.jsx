import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const ThreeDImageSlider = () => {
  const slideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: '600px',
    width: '100%',
    height: 'auto',
    borderRadius: '45px',
    cursor: 'pointer',
  };

  const paginationStyle = {
    // position: 'absolute',
    paddingTop: '1rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const navigationStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
  };

  const prevStyle = {
    ...navigationStyle,
    left: '10px',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  };

  const nextStyle = {
    ...navigationStyle,
    right: '10px',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '24px',
    color: '#000',
  };

  const handleImageClick = (imageSrc) => {
    window.open(imageSrc, '_blank');
  };

  return (
    <>
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: black !important;
          }
        `}
      </style>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 2200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {[
          'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/promo_1.png',
          'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/promo_2.png',
          'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/promo_3.png',
          'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/promo_4.png',
        ].map((src, index) => (
          <SwiperSlide style={slideStyle} key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={imageStyle}
              onClick={() => handleImageClick(src)}
            />
          </SwiperSlide>
        ))}

        <div className="custom-prev" style={prevStyle}>
          <ion-icon name="arrow-back-outline" style={iconStyle}></ion-icon>
        </div>
        <div className="custom-next" style={nextStyle}>
          <ion-icon name="arrow-forward-outline" style={iconStyle}></ion-icon>
        </div>
        <div className="custom-pagination" style={paginationStyle}></div>
      </Swiper>
    </>
  );
};

export default ThreeDImageSlider;
