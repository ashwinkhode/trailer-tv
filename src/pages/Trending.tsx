import SEO from '../components/SEO/SEO';
import ThumbnailFlex from '../components/ThumbnailFlex/ThumbnailFlex';

import {
  latestData,
  popularData,
  recommendedData,
  trendingData,
} from '../utils/thumbnailData';

const Trending = () => {
  return (
    <div className="flex flex-col lg:justify-between space-y-6 px-4 mb-36 lg:mb-0 lg:mt-8 lg:h-5/6 lg:py-6 lg:px-10 lg:overflow-y-scroll lg:scrollbars disable-scrollbars">
      <SEO title="Trending - TrailerTV | A Platform for Trailers" />
      <ThumbnailFlex
        heading="Recommended For You"
        thumbnailArray={recommendedData}
      />
      <ThumbnailFlex heading="Trending Now" thumbnailArray={trendingData} />
      <ThumbnailFlex heading="Latest Now" thumbnailArray={latestData} />
      <ThumbnailFlex heading="Popular Now" thumbnailArray={popularData} />
    </div>
  );
};

export default Trending;
