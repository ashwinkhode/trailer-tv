import React from 'react'
import ThumbnailFlex from '../ThumbnailFlex/ThumbnailFlex'
import {latestData, popularData, recommendedData, trendingData} from '../../utils/thumbnailData'

const VideoPlayer = ({
  title = 'Your Name - Official Trailer',
  channel = 'Funanimation',
  thumbnailURL = '../../assets/trailer1.jpg',
  viewsCount = '62',
  uploadDuration = '4 days',
}) => {
  const viewsCountRounded = String(viewsCount).charAt(0) + String(viewsCount).charAt(1)
  return (
    <div className='w-full h-full flex flex-row justify-between'>
      <div className='w-4/6 flex flex-col space-y-4'>
        <div className='flex flex-row justify-between items-end'>
          <div className='w-3/4 inline-flex items-end space-x-4'>
            <h1 className='font-bold text-2xl'>
              TOTD: Your Name - Official Trailer
              </h1>
            <h2 className='opacity-80 leading-7'>
              By Funanimation
          </h2>
          </div>
          <p className='text-right w-1/4 opacity-80 leading-7'>
            {`${viewsCountRounded}M views`} &middot; {`${uploadDuration} ago`}
          </p>
        </div>
        <div
          className='aspect-h-9 aspect-w-16'>
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/xU47nhruN-Q"
            title="Your Name"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
      <div className='w-1/4 px-4 flex flex-col space-y-4 overflow-y-scroll  scrollbars disable-scrollbars'>
        <ThumbnailFlex
          heading='Recommended For You'
          thumbnailArray={recommendedData}
          variant='column'
        />
      </div>
    </div>
  )
}

export default VideoPlayer
