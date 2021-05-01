import {Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {sidenavRoutes} from '../../utils/router'

export default function Sidenav({menuToggle, setMenuToggle}) {

  // TODO: fix responsive bug issue
  return (
    <div className='relative h-full flex flex-col items-start bg-[#181818] '>
      <div
        onClick={() => setMenuToggle(!menuToggle)}
        className='w-full hover:bg-[#252525] cursor-pointer overflow-hidden'>
        <li
          className='m-6 w-full list-none'
          aria-label='Menu'

        >
          <BiMenu className='w-1/3 h-full' />
        </li>
      </div>
      {
        sidenavRoutes.map(
          link => (
            <Link
              key={link.name}
              to={link.path}
              className='w-full hover:bg-[#252525] cursor-pointer overflow-hidden'
            >
              <li
                className='m-6 w-full list-none'
                aria-label={link.name}
              >
                <link.icon className='w-1/3 h-full' />
              </li>
            </Link>
          )
        )
      }
      {
        menuToggle ? (
          <div className='absolute w-[250%] h-full flex flex-col items-start bg-[#181818] z-10 shadow-sidenav'>
            <li
              className='p-6 w-full flex flex-row justify-start items-center gap-x-2 hover:bg-[#252525] cursor-pointer list-none'
              aria-label='Menu'
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <BiMenu className='w-6 h-6' />
              Menu
            </li>
            {
              sidenavRoutes.map(
                link => (
                  <Link
                    key={link.name}
                    className='w-full'
                    to={link.path}
                  >
                    <li
                      className='p-6 w-full flex flex-row justify-start items-center gap-x-2 hover:bg-[#252525] cursor-pointer list-none'
                      aria-label={link.name}
                    >
                      <link.icon className='w-6 h-6' />
                      {link.name}
                    </li>
                  </Link>
                )
              )
            }
          </div>
        ) : null
      }
    </div>
  )
}