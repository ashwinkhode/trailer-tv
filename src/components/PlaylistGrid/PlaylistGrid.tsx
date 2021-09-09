import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { My_PlaylistsQuery, useMy_PlaylistsQuery } from '~/generated/graphql';
import ThumbnailGrid from '../ThumbnailGrid/ThumbnailGrid';

const PLAYLISTS = [
  {
    title: 'Must Watch Trailers of 2021',
    channel: 'Omkar Kulkarni',
    thumbnailURL: 'assets/trailer3.jpg',
  },
  {
    title: 'DC Trailers',
    channel: 'Sushil Buragute',
    thumbnailURL: 'assets/trailer4.jpg',
  },
  {
    title: 'Marvel Entertainment Trailers',
    channel: 'Melvin Fernando',
    thumbnailURL: 'assets/trailer5.jpg',
  },
];

export const MY_PLAYLISTS_QUERY = gql`
  query MY_PLAYLISTS {
    myPlaylists {
      playlistName
      playlistId
      videos {
        videoId
      }
      createdAt
    }
  }
`;

const PlaylistGrid = () => {
  const { data, loading, error } =
    useQuery<My_PlaylistsQuery>(MY_PLAYLISTS_QUERY);

  const myPlaylistsArray =
    data?.myPlaylists.map((playlist) => ({
      id: playlist.playlistId,
      title: playlist.playlistName,
      videos: playlist.videos,
    })) ?? [];

  if (loading) return <p>Loading Your Playlists. Please Wait...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;
  if (!data?.myPlaylists || data.myPlaylists === [])
    return <p>No Playlists 😔</p>;
  return <ThumbnailGrid variant="playlist" thumbnailArray={myPlaylistsArray} />;
};

export default PlaylistGrid;
