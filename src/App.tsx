import clsx from 'clsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/AuthForm/Login';
import SignUp from './components/AuthForm/SignUp';
import { Layout } from './components/Layout/Layout';
import { useHome } from './context/HomeContext';
import WatchVideo from './pages/WatchVideo';
import { AppRoutes } from './utils/router';

export default function App() {
  const background = useHome();
  const router = useLocation();

  return (
    <div
      className={clsx(
        router.pathname === '/' ? background.bg : 'bg-default',
        'w-full h-full bg-cover lg:p-12'
      )}
    >
      <Layout>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="watch/:id" element={<WatchVideo />} />
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
