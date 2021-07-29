import React from 'react';
import SEO from '../components/SEO/SEO';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const WatchVideo = () => {
  const { id } = useParams();
  const totd = 'wZti8QKBWPo';

  // TODO: Add dynamic SEO with AuthCheck
  return (
    <div className="h-5/6 min-w-full px-4 lg:py-6 lg:px-10">
      <SEO />
      <VideoPlayer video={id === 'totd' ? totd : id} />
    </div>
  );
};

export default WatchVideo;
