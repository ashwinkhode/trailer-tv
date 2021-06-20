import SEO from '../components/SEO/SEO'
import ThumbnailFlex from '../components/ThumbnailFlex/ThumbnailFlex'

import {latestData, popularData, recommendedData, trendingData} from '../utils/thumbnailData'

const Trending = () => {
  return (
    <div className='flex flex-col justify-between space-y-6 h-5/6 py-6 px-10 overflow-y-scroll scrollbars disable-scrollbars'>
      <SEO title='Trending - TrailerTV | A Platform for Trailers' />
      <ThumbnailFlex
        heading='Recommended For You'
        thumbnailArray={recommendedData}
      />
      <ThumbnailFlex
        heading='Trending Now'
        thumbnailArray={trendingData}
      />
      <ThumbnailFlex
        heading='Latest Now'
        thumbnailArray={latestData}
      />
      <ThumbnailFlex
        heading='Popular Now'
        thumbnailArray={popularData}
      />
    </div>
  )
}

export default Trending
