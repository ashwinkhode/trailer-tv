import clsx from 'clsx';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { useHome } from './context/HomeContext';
import Playlist from './pages/Playlist';
import UserProfile from './pages/UserProfile';
import { AppRoutes } from './utils/router';

const BG = [
  'https://trailer-tv.vercel.app/6023a91cdf5c539e0c5b.jpg',
  'https://trailer-tv.vercel.app/0dee68533c000759c0dd.jpg',
  'https://trailer-tv.vercel.app/1291aca6f65e44a5451d.jpg',
  'https://trailer-tv.vercel.app/a29233ae50de3553669f.jpg',
  'https://trailer-tv.vercel.app/c94397de3c1cecbad49a.jpg',
];

export default function App() {
  const router = useLocation();
  const background = useHome();

  useEffect(() => {
    BG.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, []);

  return (
    <div className="relative w-screen h-screen lg:p-12 overflow-hidden App">
      <div
        className={clsx(
          router.pathname === '/' ? `${background.bg}` : 'bg-default',
          'bgTransition absolute inset-0 w-full h-full bg-top bg-no-repeat bg-cover'
        )}
      ></div>
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
