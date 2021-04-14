import {CgProfile, CgBell} from 'react-icons/cg'
import Searchbar from '../Searchbar/Searchbar'
import MdiMovieOpenOutline from './MdiMovieOpenOutline'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between items-center py-4 px-10'>
      <div>
        <div className='flex flex-row justify-center items-center space-x-2'>
          <MdiMovieOpenOutline className='w-6 h-6' />
          <h1 className='text-2xl font-bold' >
            Trailer
            <span className='text-[#FF3333]'>
              TV
              </span>
          </h1>
        </div>
      </div>
      <div>
        <Searchbar />
      </div>
      <div className='flex flex-row space-x-6'>
        <div>
          <CgBell className='w-6 h-6' />
        </div>
        <div>
          <CgProfile className='h-6 w-6' />
        </div>
      </div>
    </div>
  )
}

export default Header
