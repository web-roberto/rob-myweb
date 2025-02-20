import Image from 'next/image';
import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

function CategoryContent({ video, defaultImage, name }) {
  return (
    <HoverVideoPlayer
      videoSrc={video}
      pausedOverlay={<Image src={defaultImage} alt={name} fill />}
    />
  );
}

export default CategoryContent;
