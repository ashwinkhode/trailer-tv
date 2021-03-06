import { BsArrowRight } from 'react-icons/bs';
import { useVideosQuery } from '~/generated/graphql';
import SEO from '../components/SEO/SEO';
import ThumbnailGrid from '../components/ThumbnailGrid/ThumbnailGrid';

const WatchLater = () => {
  const { data, loading, error } = useVideosQuery({
    fetchPolicy: 'cache-first',
  });

  const trendingData = data?.videos?.filter(
    (video) => video.category === 'trending'
  );

  if (loading)
    return <p className="lg:mt-10 ml-4 lg:ml-6">Loading! Please Wait...</p>;
  if (error || !data)
    return <p className="lg:mt-10 ml-4 lg:ml-6">Please try again</p>;
  return (
    <div className="flex flex-col justify-between space-y-4 h-5/6 px-4 lg:py-6 lg:px-10 lg:mt-8 ">
      <SEO title="Playlists - TrailerTV | A Platform for Trailers" />
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold lg:font-bold text-lg lg:text-2xl">
          Watch Later
        </h1>
        <div className="hidden  flex-row justify-end items-center mr-2">
          <button className="flex flex-row justify-center items-center gap-2">
            Explore
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-y-scroll scrollbars disable-scrollbars">
        <ThumbnailGrid thumbnailArray={trendingData?.slice(0, 3)} />
      </div>
    </div>
  );
};

export default WatchLater;
