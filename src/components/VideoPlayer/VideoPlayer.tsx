import React from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import clsx from 'clsx';
import ThumbnailFlex from '../ThumbnailFlex/ThumbnailFlex';
import {
  recommendedData,
  allVideos,
  VideoMetadata,
} from '../../utils/thumbnailData';

const VideoPlayer = ({ video = 'nW948Va-l10' }) => {
  const requiredVideo = allVideos.find((videoData) => videoData.id === video);
  const { title, channel, viewsCount, uploadDuration } =
    requiredVideo as VideoMetadata;
  const viewsCountRounded =
    String(viewsCount).charAt(0) + String(viewsCount).charAt(1);
  const isLiked = false;
  const videoURL = `https://www.youtube.com/embed/${video}`;

  return (
    <div className="lg:mt-8 min-w-full h-full flex flex-col lg:flex-row lg:justify-between">
      <div className="w-full lg:w-4/6 flex flex-col space-y-2">
        <div className="flex flex-row lg:justify-between items-end">
          <div className="w-full flex flex-col lg:inline-flex lg:items-start">
            <h1 className="font-semibold text-lg lg:font-bold lg:text-2xl truncate">
              {title}
            </h1>
            <h2 className="text-sm lg:text-base opacity-80 lg:leading-7 truncate">{`By ${channel}`}</h2>
          </div>
        </div>
        <div className="aspect-h-9 lg:aspect-h-8 aspect-w-16">
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

        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-end lg:pt-1">
          <div className="flex flex-row justify-center items-center lg:items-end space-x-4 lg:space-x-4">
            <button
              className={clsx(
                'flex space-x-1 text-sm',
                isLiked ? 'opacity-100' : 'opacity-80'
              )}
            >
              <AiFillLike className="w-6 h-6" />
              <span>{isLiked ? 'Liked' : 'Like'}</span>
            </button>
            <button
              className={clsx(
                'flex space-x-1 text-sm',
                isLiked ? 'opacity-100' : 'opacity-80'
              )}
            >
              <AiFillDislike className="w-6 h-6" />
              <span>{isLiked ? 'Disliked' : 'Dislike'}</span>
            </button>
            <button
              className={clsx(
                'flex space-x-1 text-sm',
                isLiked ? 'opacity-100' : 'opacity-80'
              )}
            >
              <MdPlaylistAdd className="w-6 h-6" />
              <span>{isLiked ? 'Added to Playlist' : 'Add to Playlist'}</span>
            </button>
          </div>
          <p className="mb-1 text-sm lg:text-base text-right lg:w-1/4 opacity-90 leading-7">
            {`${viewsCountRounded}M views`} &middot; {`${uploadDuration} ago`}
          </p>
        </div>
      </div>

      <div className="max-w-[100vw] overflow-x-hidden overflow-y-auto h-full lg:w-[30%] my-4 flex lg:justify-end border-t-2 lg:border-t-0 lg:border-l-2 border-gray-300 lg:!overflow-y-scroll disable-scrollbars scrollbars">
        <div className="lg:w-11/12 mt-4 lg:px-4 flex flex-col ">
          <h1 className="font-semibold text-lg lg:text-2xl">Related Videos</h1>
          <ThumbnailFlex
            heading=""
            thumbnailArray={recommendedData}
            variant="column"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
