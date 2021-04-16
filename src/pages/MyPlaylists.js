import {BsArrowRight} from 'react-icons/bs'
import SEO from '../components/SEO/SEO'
import ThumbnailGrid from '../components/ThumbnailGrid/ThumbnailGrid'

import {latestData, popularData, recommendedData, trendingData} from '../utils/thumbnailData'

const MyPlaylists = () => {
  return (
    <div className='w-full flex flex-col justify-between space-y-4 h-5/6 py-6 px-10 '>
      <SEO title='Playlists - TrailerTV | A Platform for Trailers' />
      <div
        className='w-full flex flex-row justify-between'>
        <h1
          className='font-bold text-2xl'
        >
          My Playlists
        </h1>
        <div
          className='flex flex-row justify-end items-center lg:mr-6'>
          <button className='flex flex-row justify-center items-center gap-2'>
            Explore
              <BsArrowRight />
          </button>
        </div>

      </div>
      <div className='w-full h-full overflow-y-scroll scrollbars disable-scrollbars'>
        <ThumbnailGrid
          thumbnailArray={[...recommendedData, ...popularData, ...trendingData, ...latestData]}
        />

      </div>
    </div>
  )
}

export default MyPlaylists
