import { RiDeleteBin6Line } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import SEO from '~/components/SEO/SEO';
import ThumbnailGrid from '~/components/ThumbnailGrid/ThumbnailGrid';
import { usePlaylistQuery } from '~/generated/graphql';
import { latestData } from '~/utils/thumbnailData';

export default function Playlist() {
  const { id } = useParams();

  const { data, loading, error } = usePlaylistQuery({
    variables: {
      playlistId: id,
    },
  });

  if (loading) return <p>Loading Your Playlists. Please Wait...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;
  if (!data?.playlist || data.playlist.videos === [])
    return <p>No Videos 😔</p>;
  return (
    <div className="flex flex-col justify-between space-y-4 h-5/6 px-4 lg:py-6 lg:px-10 lg:mt-8 ">
      <SEO title="Playlists - TrailerTV | A Platform for Trailers" />
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold lg:font-bold text-lg lg:text-2xl">
          {data.playlist.playlistName}
        </h1>
        <div className="flex-row justify-end items-center mr-2">
          <button
            // TODO: Implement Delete Playlist
            onClick={() => alert('implement this')}
            className="flex flex-row justify-center items-center px-2 py-1 gap-2 bg-[#FF3333] hover:bg-[#FF4444] active:bg-[#CC0000] rounded"
          >
            <RiDeleteBin6Line /> Delete
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-y-scroll lg:scrollbars disable-scrollbars">
        <ThumbnailGrid thumbnailArray={latestData} forPlaylist={true} />
      </div>
    </div>
  );
}
