import React from 'react'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import clsx from 'clsx'
import ThumbnailFlex from '../ThumbnailFlex/ThumbnailFlex'
import {latestData, popularData, recommendedData, trendingData, allVideos} from '../../utils/thumbnailData'

const VideoPlayer = ({
  video = 'nW948Va-l10'
}) => {
  const {title, channel, viewsCount, uploadDuration} = allVideos.find((videoData) => videoData.id === video)
  const viewsCountRounded = String(viewsCount).charAt(0) + String(viewsCount).charAt(1)
  const isLiked = false
  const videoURL = `https://www.youtube.com/embed/${video}`

  return (
    <div className='w-full h-full flex flex-row justify-between'>
      <div className='w-4/6 flex flex-col space-y-2'>
        <div className='flex flex-row justify-between items-end'>
          <div className='w-full inline-flex items-end space-x-4'>
            <h1 className='font-bold text-2xl truncate'>
              {title}
            </h1>
            <h2 className='opacity-80 leading-7 truncate'>
              {`By ${channel}`}
            </h2>
          </div>

        </div>
        <div
          className='aspect-h-9 aspect-w-16'>
          <iframe
            // width="560"
            // height="315"
            src={videoURL}
            title="Your Name"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className='flex flex-row justify-between items-end  pt-1'>
          <div className='flex flex-row items-end space-x-4'>
            <button className={clsx('flex space-x-1', isLiked ? 'opacity-100' : 'opacity-80')}>
              <AiFillLike className='w-6 h-6' />
              <span>{isLiked ? 'Liked' : 'Like'}</span>
            </button>
            <button className={clsx('flex space-x-1', isLiked ? 'opacity-100' : 'opacity-80')}>
              <AiFillDislike className='w-6 h-6' />
              <span>{isLiked ? 'Disliked' : 'Dislike'}</span>
            </button>
            <button className={clsx('flex space-x-1', isLiked ? 'opacity-100' : 'opacity-80')}>
              <MdPlaylistAdd className='w-6 h-6' />
              <span>{isLiked ? 'Added to Playlist' : 'Add to Playlist'}</span>
            </button>
          </div>
          <p className='text-right w-1/4 opacity-90 leading-7'>
            {`${viewsCountRounded}M views`} &middot; {`${uploadDuration} ago`}
          </p>
        </div>
      </div>

      <div className='h-full w-[30%] flex justify-end border-l-2 border-gray-300'>
        <div className='w-11/12 px-4 flex flex-col space-y-4 overflow-y-scroll  scrollbars disable-scrollbars'>
          <ThumbnailFlex
            heading='Recommended For You'
            thumbnailArray={recommendedData}
            variant='column'
          />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
