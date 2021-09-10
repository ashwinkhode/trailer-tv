import React from 'react';
import SEO from '../components/SEO/SEO';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import { useVideoQuery } from '~/generated/graphql';

const WatchVideo = () => {
  const { id } = useParams();
  const { data, loading, error } = useVideoQuery({
    variables: {
      videoId: id === 'totd' ? 'd68a5f54-fecc-444a-b450-2de1f9d8e8ef' : id,
    },
  });

  // TODO: Add dynamic SEO with AuthCheck
  if (loading) return <p>Loading</p>;
  if (error || !data?.video) return <p>Please try again</p>;
  return (
    <div className="h-5/6 min-w-full px-4 lg:py-6 lg:px-10">
      <SEO />
      <VideoPlayer video={data.video} />
    </div>
  );
};

export default WatchVideo;
