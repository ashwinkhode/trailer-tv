import Header from '../components/Header/Header'
import SEO from '../components/SEO/SEO'
import ThumbnailGrid from '../components/ThumbnailGrid/ThumbnailGrid'

import {latestData, popularData, recommendedData, trendingData} from '../utils/thumbnailData'

const Trending = () => {
  return (
    <div className='flex flex-col justify-between space-y-6 h-5/6 py-6 px-10 overflow-y-scroll scrollbars disable-scrollbars'>
      <SEO title='Trending - TrailerTV | A Platform for Trailers' />
      <ThumbnailGrid
        heading='Recommended For You'
        thumbnailArray={recommendedData}
      />
      <ThumbnailGrid
        heading='Trending Now'
        thumbnailArray={trendingData}
      />
      <ThumbnailGrid
        heading='Latest Now'
        thumbnailArray={latestData}
      />
      <ThumbnailGrid
        heading='Popular Now'
        thumbnailArray={popularData}
      />
    </div>
  )
}

export default Trending
