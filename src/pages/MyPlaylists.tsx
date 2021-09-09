import { Link } from 'react-router-dom';
import PlaylistGrid from '~/components/PlaylistGrid/PlaylistGrid';
import SEO from '../components/SEO/SEO';

const MyPlaylists = () => {
  return (
    <div className="w-full flex flex-col justify-between lg:justify-start space-y-4 h-5/6 px-4 lg:py-6 lg:px-10 lg:mt-8">
      <SEO title="Playlists - TrailerTV | A Platform for Trailers" />
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold lg:font-bold text-lg lg:text-2xl">
          My Playlists
        </h1>
        <div className="flex-row justify-end items-center lg:mr-2">
          <Link to="/new-playlist">
            <button className="flex flex-row justify-center items-center gap-2">
              Create New Playlist +
            </button>
          </Link>
        </div>
      </div>
      <div className="overflow-y-auto lg:scrollbars disable-scrollbars">
        <PlaylistGrid />
      </div>
    </div>
  );
};

export default MyPlaylists;
