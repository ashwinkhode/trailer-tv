import {Routes, Route} from 'react-router-dom'
import {Layout} from './components/Layout/Layout';
import Home from './pages/Home';
import {sidenavRoutes} from './utils/router'

export default function App() {
  return (
    <div
      className='w-full h-full bg-layout-image bg-cover lg:p-12'
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
