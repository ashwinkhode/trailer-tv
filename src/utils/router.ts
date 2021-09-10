import { BsCollectionPlay } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import { MdMovieFilter } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import Home from '../pages/Home';
import Trending from '../pages/Trending';
import MyPlaylists from '../pages/MyPlaylists';
import WatchVideo from '../pages/WatchVideo';
import Login from '~/components/AuthForm/Login';
import SignUp from '~/components/AuthForm/SignUp';
import NewPlaylist from '~/pages/NewPlaylist';

export const sidenavRoutes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
    icon: BiHomeAlt,
  },
  {
    name: 'Trending',
    path: 'trending',
    element: Trending,
    icon: HiFire,
  },
  {
    name: 'My Playlists',
    path: 'playlists',
    element: MyPlaylists,
    icon: BsCollectionPlay,
  },
  // {
  //   name: 'Watch Later',
  //   path: 'saved',
  //   element: WatchLater,
  //   icon: HiOutlineSave,
  // },
  {
    name: 'Trailer of the Day',
    path: 'watch/totd',
    element: WatchVideo,
    icon: MdMovieFilter,
  },
];

export const AppRoutes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
    icon: BiHomeAlt,
  },
  {
    name: 'Trending',
    path: 'trending',
    element: Trending,
    icon: HiFire,
  },
  {
    name: 'My Playlists',
    path: 'playlists',
    element: MyPlaylists,
    icon: BsCollectionPlay,
  },
  {
    name: 'Create New Playlist',
    path: 'new-playlist',
    element: NewPlaylist,
  },
  // {
  //   name: 'Watch Later',
  //   path: 'saved',
  //   element: WatchLater,
  //   icon: HiOutlineSave,
  // },
  {
    name: 'Login',
    path: 'login',
    element: Login,
  },
  {
    name: 'Sign Up',
    path: 'signup',
    element: SignUp,
  },
];
