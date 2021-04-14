import Sidenav from '../Sidenav/Sidenav'

export const Layout = ({children}, ...otherprops) => {
  return (
    <div className='w-full h-full flex justify-start items-center rounded-3xl bg-black bg-opacity-40 overflow-hidden'
      {...otherprops}
    >
      <div className='h-full'>
        <Sidenav />
      </div>
      {children}
    </div>
  )
}