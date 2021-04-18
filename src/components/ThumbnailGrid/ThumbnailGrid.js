import React from 'react'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import ThumbnailCard from '../ThumbnailCard/ThumbnailCard'

const ThumbnailGrid = ({thumbnailArray, variant = 'video'}) => {
  return (
    <div className="w-full flex flex-wrap overflow-hidden sm:-mx-2 md:-mx-3 lg:-mx-2 xl:-mx-2">
      {
        thumbnailArray.map(
          ({
            title, channel, viewsCount, uploadDuration, thumbnailURL
          }) => (
            <div
              key={title}
              className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-3 md:px-3 md:w-1/2 lg:mb-4 lg:mt-0 lg:px-2 lg:w-1/5 xl:mb-4 xl:mt-0 xl:px-2 xl:w-1/5">
              {
                variant === 'video'
                  ? (
                    <ThumbnailCard
                      key={title}
                      title={title}
                      channel={channel}
                      thumbnailURL={thumbnailURL}
                      viewsCount={viewsCount}
                      uploadDuration={uploadDuration}
                    />
                  ) : (
                    <PlaylistCard
                      key={title}
                      title={title}
                      channel={channel}
                      thumbnailURL={thumbnailURL}
                    />
                  )
              }
            </div>

          )
        )
      }

    </div>
  )
}

export default ThumbnailGrid
