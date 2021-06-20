import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {HomeContextProvider} from './context/HomeContext'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </BrowserRouter>
  , document.getElementById('root'))
