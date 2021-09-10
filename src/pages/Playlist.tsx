import clsx from 'clsx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import SEO from '~/components/SEO/SEO';
import ThumbnailGrid from '~/components/ThumbnailGrid/ThumbnailGrid';
import { useUser } from '~/context/UserContext';
import {
  usePlaylistQuery,
  useDelete_PlaylistMutation,
  My_PlaylistsDocument,
} from '~/generated/graphql';

export default function Playlist() {
  const { id } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  const [deletePlaylist] = useDelete_PlaylistMutation({
    fetchPolicy: 'no-cache',
  });

  const { data, loading, error } = usePlaylistQuery({
    variables: {
      playlistId: id,
    },
  });

  const videosArray =
    (data?.playlist.videos &&
      data?.playlist.videos.map((video) => ({
        title: video.title,
        channel: video.channel,
        viewsCount: video.views,
        thumbnailURL: video.thumbnail_url,
      }))) ||
    [];

  if (loading) return <p>Loading Your Playlists. Please Wait...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;
  if (!data)
    return (
      <div className="flex flex-col justify-between space-y-4 h-5/6 px-4 lg:py-6 lg:px-10 lg:mt-8 ">
        Please Try Again
      </div>
    );
  return (
    <div className="flex flex-col justify-between space-y-4 h-5/6 px-4 lg:py-6 lg:px-10 lg:mt-8 ">
      <SEO title="Playlists - TrailerTV | A Platform for Trailers" />
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold lg:font-bold text-lg lg:text-2xl">
          {data.playlist.playlistName}
        </h1>
        <div className="flex-row justify-end items-center mr-2">
          <button
            onClick={async () => {
              try {
                const res = await deletePlaylist({
                  variables: {
                    playlistId: id,
                  },
                  refetchQueries: [{ query: My_PlaylistsDocument }],
                });
                if (res.data?.deletePlaylist.playlistId === id) {
                  navigate('/playlists', { replace: false });
                }
              } catch (err) {
                console.error(err);
              }
            }}
            className={clsx(
              data.playlist.user.userId === user?.userId ? '' : 'hidden',
              'flex flex-row justify-center items-center px-2 py-1 gap-2 bg-[#FF3333] hover:bg-[#FF4444] active:bg-[#CC0000] rounded'
            )}
          >
            <RiDeleteBin6Line /> Delete
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-y-scroll lg:scrollbars disable-scrollbars">
        {data.playlist.videos?.length === 0 ? (
          <p>No Videos 😔</p>
        ) : (
          <ThumbnailGrid thumbnailArray={videosArray} forPlaylist={true} />
        )}
      </div>
    </div>
  );
}
