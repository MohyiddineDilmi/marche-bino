import { useEffect, useRef, useState } from 'react';

function VideoPlayer({ videoSources }) {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleScroll = () => {
      const videoPosition = videoElement.getBoundingClientRect();

      if (videoPosition && videoPosition.top <= window.innerHeight && videoPosition.bottom >= 0) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    };

    const handleEnded = () => {
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= videoSources.length) {
          return 0;
        } else {
          return nextIndex;
        }
      });
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleEnded);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleEnded);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentVideoIndex, videoSources]);

  const currentVideoSource = videoSources[currentVideoIndex] ?? '';

  return (
    <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
      <video muted loop ref={videoRef} style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} autoPlay>
        <source src={currentVideoSource} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
