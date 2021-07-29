import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard';

type ThumbnailGridProps = {
  thumbnailArray: any[];
  variant?: string;
};

const ThumbnailGrid = ({
  thumbnailArray,
  variant = 'video',
}: ThumbnailGridProps) => {
  return (
    <div className="min-w-full flex flex-wrap space-y-4 lg:space-y-0 overflow-hidden mb-8 sm:-mx-2 md:-mx-3 lg:-mx-2 xl:-mx-2">
      {thumbnailArray.map(
        ({ id, title, channel, viewsCount, uploadDuration, thumbnailURL }) => (
          <div
            key={title}
            className=" min-w-full w-full lg:min-w-min overflow-hidden  sm:w-full md:my-3 md:px-3 md:w-1/2 lg:!my-2 lg:!px-2 lg:!w-1/5 xl:mb-4 xl:mt-0 xl:px-2 xl:w-1/5"
          >
            {variant === 'video' ? (
              <Link to={`/watch/${id}`}>
                <ThumbnailCard
                  title={title}
                  channel={channel}
                  thumbnailURL={thumbnailURL}
                  viewsCount={viewsCount}
                  uploadDuration={uploadDuration}
                />
              </Link>
            ) : (
              <PlaylistCard
                key={title}
                title={title}
                channel={channel}
                thumbnailURL={thumbnailURL}
              />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ThumbnailGrid;
