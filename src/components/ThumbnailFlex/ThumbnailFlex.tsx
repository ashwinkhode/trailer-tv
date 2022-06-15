import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard';

type ThumbnailFlexProps = {
  heading: string;
  thumbnailArray: any[] | undefined;
  variant?: 'row' | 'column';
};

const ThumbnailFlex = ({
  heading,
  thumbnailArray,
  variant = 'row',
}: ThumbnailFlexProps) => {
  return (
    <div className="flex flex-col lg:justify-between items-center space-y-4">
      <div className="w-full flex flex-row lg:justify-between">
        <h1 className="font-semibold text-lg lg:text-2xl">{heading}</h1>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className={clsx(
            variant === 'column'
              ? '!flex-col lg:space-y-4 !overflow-x-hidden space-y-4'
              : 'lg:flex-row lg:-mx-0 lg:space-x-4',
            'max-w-[100vw] w-screen flex-row flex-1 lg:w-full flex overflow-x-auto lg:overflow-x-hidden'
          )}
        >
          {thumbnailArray?.map(
            ({ videoId, title, channel, views, thumbnail_url }) => (
              <div
                className="min-w-[85%] mr-8 lg:min-w-min lg:mr-0 last:pr-4"
                key={videoId}
              >
                <Link to={`/watch/${videoId}`}>
                  <ThumbnailCard
                    title={title}
                    channel={channel}
                    thumbnailURL={thumbnail_url}
                    viewsCount={views}
                  />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailFlex;
