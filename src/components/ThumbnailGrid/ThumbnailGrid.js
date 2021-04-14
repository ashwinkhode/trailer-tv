import {BsArrowRight} from 'react-icons/bs'
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard'

const ThumbnailGrid = ({heading, thumbnailArray}) => {
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
          <button className='flex flex-row justify-center items-center gap-2'>
            Explore
              <BsArrowRight />
          </button>
        </div>

      </div>

      <div className='w-full flex flex-row space-x-4'>
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

export default ThumbnailGrid
