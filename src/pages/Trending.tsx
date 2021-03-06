import { useVideosQuery } from '~/generated/graphql';
import SEO from '../components/SEO/SEO';
import ThumbnailFlex from '../components/ThumbnailFlex/ThumbnailFlex';

const Trending = () => {
  const { data, loading, error } = useVideosQuery({
    fetchPolicy: 'cache-first',
  });
  const recommendedData = data?.videos?.filter(
    (video) => video.category === 'recommended'
  );
  const trendingData = data?.videos?.filter(
    (video) => video.category === 'trending'
  );
  const latestData = data?.videos?.filter(
    (video) => video.category === 'latest'
  );
  const popularData = data?.videos?.filter(
    (video) => video.category === 'popular'
  );

  if (loading)
    return <p className="lg:mt-10 ml-4 lg:ml-6">Loading! Please Wait...</p>;
  if (error || !data)
    return <p className="lg:mt-10 ml-4 lg:ml-6">Please try again</p>;
  return (
    <div className="flex flex-col lg:justify-between space-y-6 px-4 mb-36 lg:mb-0 lg:mt-8 lg:h-5/6 lg:py-6 lg:px-10 lg:overflow-y-scroll lg:scrollbars disable-scrollbars">
      <SEO title="Trending - TrailerTV | A Platform for Trailers" />
      <ThumbnailFlex
        heading="Recommended For You"
        thumbnailArray={recommendedData}
      />
      <ThumbnailFlex heading="Latest Now" thumbnailArray={latestData} />
      <ThumbnailFlex heading="Popular Now" thumbnailArray={popularData} />
    </div>
  );
};

export default Trending;
