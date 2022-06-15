import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { sidenavRoutes } from '../../utils/router';

export default function Sidenav() {
  // TODO: fix responsive bug issue
  return (
    <div className="relative w-full lg:h-full flex justify-center items-center lg:flex-col lg:justify-start lg:items-start bg-[#181818] ">
      {sidenavRoutes.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="w-1/5 lg:w-full hover:bg-[#252525] cursor-pointer overflow-hidden"
        >
          <li className="my-4 lg:m-6 w-full list-none" aria-label={link.name}>
            <link.icon className="mx-auto lg:mx-0 w-1/3 h-full" />
          </li>
        </Link>
      ))}
      {/* Only renders on large displays */}
      {/* {menuToggle && (
        <div className="hidden absolute w-[250%] h-full lg:flex flex-col items-start bg-[#181818] z-10 shadow-sidenav">
          <li
            className="p-6 w-full flex flex-row justify-start items-center gap-x-2 hover:bg-[#252525] cursor-pointer list-none"
            aria-label="Menu"
            onClick={() =>
              setMenuToggle ? setMenuToggle(!menuToggle) : undefined
            }
          >
            <BiMenu className="w-6 h-6" />
            Menu
          </li>
          {sidenavRoutes.map((link) => (
            <Link key={link.name} className="w-full" to={link.path}>
              <li
                className="p-6 w-full flex flex-row justify-start items-center gap-x-2 hover:bg-[#252525] cursor-pointer list-none"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
                {link.name}
              </li>
            </Link>
          ))}
        </div>
      )} */}
    </div>
  );
}
