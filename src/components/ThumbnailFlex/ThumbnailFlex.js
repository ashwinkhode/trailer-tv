import clsx from 'clsx'
import {BsArrowRight} from 'react-icons/bs'
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard'

const ThumbnailFlex = ({heading, thumbnailArray, variant = 'row'}) => {
  return (
    <div className='flex flex-col justify-between items-center space-y-4'>
      <div
        className='w-full flex flex-row justify-between'>
        <h1
          className='font-bold text-2xl'
        >
          {heading}
        </h1>
        <div
          className='flex flex-row justify-end items-center'>
          <button className={clsx(variant === 'column' ? 'hidden' : '', 'flex flex-row justify-center items-center gap-2')}>
            Explore
              <BsArrowRight />
          </button>
        </div>

      </div>

      <div className={clsx(variant === 'column' ? 'flex-col space-y-4' : 'flex-row -mx-2 space-x-4', ' w-full flex')}>
        {
          thumbnailArray.map(
            ({
              title, channel, viewsCount, uploadDuration, thumbnailURL
            }) => (
              <ThumbnailCard
                key={title}
                title={title}
                channel={channel}
                thumbnailURL={thumbnailURL}
                viewsCount={viewsCount}
                uploadDuration={uploadDuration}
              />
            )
          )
        }
      </div>
      {/* <div
        className='flex flex-row justify-end items-center'>
        <button className='flex flex-row justify-center items-center gap-2'>
          Explore
              <BsArrowRight />
        </button>
      </div> */}
    </div>
  )
}

export default ThumbnailFlex
