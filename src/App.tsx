import clsx from 'clsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { useHome } from './context/HomeContext';
import Playlist from './pages/Playlist';
import UserProfile from './pages/UserProfile';
import { AppRoutes } from './utils/router';

export default function App() {
  const router = useLocation();
  const background = useHome();

  return (
    <div
      className={clsx(
        router.pathname === '/' ? `${background.bg}` : 'bg-default',
        'w-full h-full bg-center bg-no-repeat bg-cover lg:p-12'
      )}
    >
      <Layout>
        <Routes>
          <Route path="profile" element={<UserProfile />} />
          <Route path="playlist/:id" element={<Playlist />} />
          {AppRoutes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={route.element()}
            />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}
