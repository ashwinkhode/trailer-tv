import { useState } from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { trendingData } from '~/utils/thumbnailData';
import SmartCompressedImage from '../SmartCompressedImage/SmartCompressedImage';

export default function CardCarousel() {
  const [currentVideoId, setVideoId] = useState('sY8gUtyeAKE');
  const currentIndex = trendingData.findIndex(
    ({ id }) => id === currentVideoId
  );
  const { title, thumbnailURL } = trendingData[currentIndex];

  return (
    <div className="lg:hidden w-full">
      <div className="w-full relative">
        <button
          className="absolute flex justify-center items-center top-0 left-0 text-gray-50 h-5/6 bg-transparent p-1.5 rounded-full focus:outline-none"
          onClick={() => {
            if (currentIndex > 0) setVideoId(trendingData[currentIndex - 1].id);
          }}
        >
          <BsCaretLeftFill className="w-6 h-6  drop-shadow-sm" />
        </button>
        <Link to={`watch/${currentVideoId}`}>
          <img
            alt={title}
            src={
              thumbnailURL
                ? SmartCompressedImage(thumbnailURL, '200')
                : undefined
            }
            width="200"
            className="mx-auto rounded-md w-full"
          />
        </Link>
        <button
          className="absolute flex justify-center items-center top-0 right-0 text-gray-50 h-5/6 bg-transparent p-1.5 rounded-full focus:outline-none"
          onClick={() => {
            if (currentIndex < trendingData.length - 1)
              setVideoId(trendingData[currentIndex + 1].id);
          }}
        >
          <BsCaretRightFill className="w-6 h-6  drop-shadow-sm" />
        </button>
        <h1 className="text-xs my-2 text-center truncate">{title}</h1>
      </div>
    </div>
  );
}
