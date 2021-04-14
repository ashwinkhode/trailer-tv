import {BsCollectionPlay} from 'react-icons/bs'
import {BiHomeAlt, BiMenu} from 'react-icons/bi'
import {HiFire, HiOutlineSave} from 'react-icons/hi'
import Home from '../pages/Home';
import Trending from '../pages/Trending';
import MyPlaylists from '../pages/MyPlaylists';
import WatchLater from '../pages/WatchLater';

export const sidenavRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    icon: BiHomeAlt
  },
  {
    name: 'Trending',
    path: 'trending',
    element: <Trending />,
    icon: HiFire
  },
  {
    name: 'My Playlists',
    path: 'playlists',
    element: <MyPlaylists />,
    icon: BsCollectionPlay
  },
  {
    name: 'Watch Later',
    path: 'saved',
    element: <WatchLater />,
    icon: HiOutlineSave
  },
]