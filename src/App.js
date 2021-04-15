import clsx from 'clsx';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import {Layout} from './components/Layout/Layout';
import SmartCompressedImage from './components/SmartCompressedImage/SmartCompressedImage'
import {useHome} from './context/HomeContext';
import {sidenavRoutes} from './utils/router'
import {trendingData} from './utils/thumbnailData';


export default function App() {
  const background = useHome()

  return (
    <div
      className={clsx(background.bg, 'w-full h-full bg-cover lg:p-12')}
    >
      <Layout>
        <Routes>
          {
            sidenavRoutes.map(
              route => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={route.element}
                />
              )
            )
          }
        </Routes>
      </Layout>
    </div>
  )
}
