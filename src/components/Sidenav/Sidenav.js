import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {sidenavRoutes} from '../../utils/router'

export default function Sidenav() {

  return (
    <div className='h-full flex flex-col items-start bg-[#181818] '>
      <li
        className='p-6 hover:bg-[#252525] cursor-pointer list-none'
        aria-label='Menu'
      >
        <BiMenu className='w-6 h-6' />
      </li>
      {
        sidenavRoutes.map(
          link => (
            <Link
              key={link.name}
              to={link.path}
            >
              <li
                className='p-6 hover:bg-[#252525] cursor-pointer list-none'
                aria-label={link.name}
              >
                <link.icon className='w-6 h-6' />
              </li>
            </Link>
          )
        )
      }
    </div>
  )
}