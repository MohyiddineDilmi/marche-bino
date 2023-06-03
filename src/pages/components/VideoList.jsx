import React, { useState } from 'react';
import YouTube from 'react-youtube';
import ScrollableFeed from 'react-scrollable-feed';

const VideoList = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id.videoId);

  const handleClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const opts = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <ScrollableFeed>
          {videos.map((video) => (
            <div key={video.id.videoId} onClick={() => handleClick(video.id.videoId)} style={{ cursor: 'pointer' }}>
              <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
              <div>{video.snippet.title}</div>
            </div>
          ))}
        </ScrollableFeed>
      </div>
      <div style={{ flex: 2 }}>
        <YouTube videoId={selectedVideo} opts={opts} />
      </div>
    </div>
  );
};

export default VideoList;
