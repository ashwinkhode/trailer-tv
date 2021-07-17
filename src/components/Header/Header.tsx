import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
// import Searchbar from '../Searchbar/Searchbar';
import MdiMovieOpenOutline from './MdiMovieOpenOutline';

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center p-4 lg:py-4 lg:px-10 z-10">
      <div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <MdiMovieOpenOutline className="w-6 h-6" />
          <h1 className="text-2xl font-bold">
            Trailer
            <span className="text-[#FF3333]">TV</span>
          </h1>
        </div>
      </div>
      {/* <div><Searchbar /></div> */}
      <div className="flex flex-row space-x-1 lg:space-x-6">
        {/* <div className="group hover:bg-gray-50 hover:text-gray-900 rounded-full p-1 cursor-pointer hover:shadow-thumbnailCard">
          <CgBell className="w-6 h-6" />
        </div> */}
        <Link to="/login">
          <div className="group hover:bg-gray-50 hover:text-gray-900 rounded-full p-1 cursor-pointer hover:shadow-thumbnailCard">
            <CgProfile className="h-6 w-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
