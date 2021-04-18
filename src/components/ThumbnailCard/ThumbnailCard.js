import {FaCheckCircle} from 'react-icons/fa'

const ThumbnailCard = ({
  title = 'Your Name - Official Trailer',
  channel = 'Funanimation',
  thumbnailURL = '../../assets/trailer1.jpg',
  viewsCount = '6.2',
  uploadDuration = '4 days',
}) => {
  const viewsCountRounded = String(viewsCount).charAt(0) + String(viewsCount).charAt(1)
  return (

    <div className='w-full h-full flex flex-col rounded-xl  bg-[#1A1A1A] shadow-thumbnailCard'>
      <div className='w-full rounded-t-xl overflow-hidden'>
        <img
          src={thumbnailURL}
          alt={title}
          aria-label={title}
        />
      </div>
      <div
        className='w-full p-3'>
        <h1
          className='font-medium opacity-90'
        >
          {title}
        </h1>
        <h2
          className='opacity-60 inline-flex items-center gap-x-2 text-sm'>
          {channel} <FaCheckCircle />
        </h2>
        <p
          className='opacity-60 text-sm'
        >
          {`${viewsCountRounded}M views`} &middot; {`${uploadDuration} ago`}
        </p>
      </div>

    </div>
  )
}

export default ThumbnailCard
