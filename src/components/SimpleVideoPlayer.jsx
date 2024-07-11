import React, { useEffect, useRef } from 'react';

const SimpleVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% visibility
    };

    const observer = new IntersectionObserver(handleVisibilityChange, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      muted
      loop
      playsInline
      style={{ width: '100%', height: 'auto', borderRadius: '40px' }}
    />
  );
};

export default SimpleVideoPlayer;
