import clsx from 'clsx'
import {useState} from 'react'
import Header from '../Header/Header'
import Sidenav from '../Sidenav/Sidenav'

export const Layout = ({children}, ...otherprops) => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <div className='w-full h-full flex justify-start items-center rounded-3xl bg-black bg-opacity-40 overflow-hidden'
      {...otherprops}
    >
      <div className={clsx('h-full w-[5%]')}>
        <Sidenav menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      </div>
      <div className='w-[95%] h-full flex flex-col justify-start items-start'
        onClick={() => setMenuToggle(false)}>
        <Header />
        {children}
      </div>
    </div>
  )
}