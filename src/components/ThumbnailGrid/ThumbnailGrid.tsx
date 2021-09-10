import clsx from 'clsx';
import React from 'react';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import {
  PlaylistDocument,
  useRemove_Video_From_PlaylistMutation,
} from '~/generated/graphql';
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard';

type ThumbnailGridProps = {
  thumbnailArray: any[];
  variant?: string;
  forPlaylist?: boolean;
  playlistId?: string;
};

const ThumbnailGrid = ({
  thumbnailArray,
  variant = 'video',
  forPlaylist = false,
  playlistId,
}: ThumbnailGridProps) => {
  const [removeVideoFromPlaylist] = useRemove_Video_From_PlaylistMutation({
    refetchQueries: [
      {
        query: PlaylistDocument,
        variables: {
          playlistId,
        },
      },
    ],
  });
  return (
    <div className="min-w-full flex flex-wrap space-y-4 lg:space-y-0 overflow-hidden mb-8 sm:-mx-2 md:-mx-3 lg:-mx-2 xl:-mx-2">
      {thumbnailArray.map((data) => (
        <div
          key={data.id}
          className="relative min-w-full w-full lg:min-w-min overflow-hidden  sm:w-full md:my-3 md:px-3 md:w-1/2 lg:!my-2 lg:!px-2 lg:!w-1/5 xl:mb-4 xl:mt-0 xl:px-2 xl:w-1/5"
        >
          {variant === 'video' ? (
            <>
              <button
                onClick={() => {
                  if (playlistId)
                    removeVideoFromPlaylist({
                      variables: {
                        inputData: {
                          playlistId: playlistId,
                          videoId: data.id,
                        },
                      },
                    });
                }}
                className={clsx(
                  forPlaylist ? '' : 'hidden',
                  'absolute top-2 right-4 flex justify-center items-center bg-gray-700 w-6 h-6 p-1.5 rounded-full z-10'
                )}
              >
                <GrClose className="remove-video-btn" />
              </button>
              <Link to={`/watch/${data.id}`}>
                <ThumbnailCard
                  title={data.title}
                  channel={data.channel}
                  thumbnailURL={data.thumbnailURL}
                  viewsCount={data.viewsCount}
                />
              </Link>
            </>
          ) : (
            <PlaylistCard
              key={data.title}
              id={data.id}
              title={data.title}
              thumbnailURL={data.thumbnailURL}
              totalVideos={data?.videos !== null ? data.videos.length : 0}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ThumbnailGrid;
