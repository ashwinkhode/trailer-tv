import {BsArrowRight} from 'react-icons/bs'
import SEO from '../components/SEO/SEO'
import ThumbnailGrid from '../components/ThumbnailGrid/ThumbnailGrid'

import {latestData, popularData, recommendedData, trendingData} from '../utils/thumbnailData'

const PLAYLISTS = [
  {
    title: 'Must Watch Trailers of 2021',
    channel: 'Omkar Kulkarni',
    thumbnailURL: '../../assets/trailer1.jpg',
  },
  {
    title: 'DC Trailers',
    channel: 'Sushil Buragute',
    thumbnailURL: '../../assets/trailer4.jpg',
  },
  {
    title: 'Marvel Entertainment Trailers',
    channel: 'Melvin Fernando',
    thumbnailURL: '../../assets/trailer5.jpg',
  },
]

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
          className='hidden flex-row justify-end items-center lg:mr-6'>
          <button className='flex flex-row justify-center items-center gap-2'>
            Explore
              <BsArrowRight />
          </button>
        </div>

      </div>
      <div className='w-full h-full overflow-y-scroll scrollbars disable-scrollbars'>
        <ThumbnailGrid
          variant='playlist'
          thumbnailArray={PLAYLISTS}
        />

      </div>
    </div>
  )
}

export default MyPlaylists
