import React from 'react';
import SEO from '../components/SEO/SEO';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import { useVideoQuery } from '~/generated/graphql';

const WatchVideo = () => {
  const { id } = useParams();
  const { data, loading, error } = useVideoQuery({
    variables: {
      videoId: id === 'totd' ? 'f18e30ee-ef91-4579-857a-5454100635ac' : id,
    },
  });

  // TODO: Add dynamic SEO with AuthCheck
  if (loading) return <p className="lg:mt-10 ml-4 lg:ml-6">Loading</p>;
  if (error || !data?.video)
    return <p className="lg:mt-10 ml-4 lg:ml-6">Please try again</p>;
  return (
    <div className="h-5/6 min-w-full px-4 lg:py-6 lg:px-10">
      <SEO />
      <VideoPlayer video={data.video} />
    </div>
  );
};

export default WatchVideo;
