import { useState } from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useHomeDispatch } from '~/context/HomeContext';
import { trendingData } from '~/utils/thumbnailData';
import SmartCompressedImage from '../SmartCompressedImage/SmartCompressedImage';

export default function CardCarousel() {
  const navigate = useNavigate();
  const dispatchToHome = useHomeDispatch();
  const [currentVideoId, setVideoId] = useState(
    'd68a5f54-fecc-444a-b450-2de1f9d8e8ef'
  );
  const currentIndex = trendingData.findIndex(
    ({ videoId }) => videoId === currentVideoId
  );
  const { title, thumbnail_url } = trendingData[currentIndex];

  return (
    <div className="lg:hidden w-full">
      <div className="w-full relative">
        <button
          className="absolute flex justify-center items-center top-0 left-0 text-gray-50 h-5/6 bg-transparent p-1.5 rounded-full focus:outline-none"
          onClick={() => {
            if (currentIndex > 0)
              setVideoId(trendingData[currentIndex - 1].videoId);
          }}
        >
          <BsCaretLeftFill className="w-6 h-6  drop-shadow-sm" />
        </button>
        <img
          alt={title}
          src={
            thumbnail_url
              ? SmartCompressedImage(thumbnail_url, '200')
              : undefined
          }
          width="200"
          className="mx-auto rounded-md w-full cursor-pointer"
          onClick={async () => {
            if (dispatchToHome) {
              dispatchToHome({
                payload: {
                  videoId: currentVideoId,
                },
              });
            }
            navigate(`watch/${currentVideoId}`, {
              replace: false,
            });
          }}
        />
        <button
          className="absolute flex justify-center items-center top-0 right-0 text-gray-50 h-5/6 bg-transparent p-1.5 rounded-full focus:outline-none"
          onClick={() => {
            if (currentIndex < trendingData.length - 1)
              setVideoId(trendingData[currentIndex + 1].videoId);
          }}
        >
          <BsCaretRightFill className="w-6 h-6  drop-shadow-sm" />
        </button>
        <h1 className="text-xs my-2 text-center truncate">{title}</h1>
      </div>
    </div>
  );
}
