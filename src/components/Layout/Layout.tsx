import clsx from 'clsx';
import { useState } from 'react';
import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';

export const Layout = ({ children }: any, ...otherprops: any[]) => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div
      className="relative max-w-[1280px] w-full h-full  lg:flex-row lg:justify-between lg:mx-auto lg:rounded-3xl bg-black bg-opacity-75 bg-blur overflow-hidden"
      {...otherprops}
    >
      <div
        className={clsx(
          'max-w-full w-full h-[10%] lg:h-full lg:w-[5.5%] relative z-10'
        )}
      >
        <div className="fixed top-0 w-full lg:pl-16">
          <Header />
        </div>
        <div className="fixed bottom-0 w-full lg:relative lg:w-auto lg:h-full">
          <Sidenav menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
      </div>
      <div className="min-w-full w-full h-full overflow-y-auto lg:absolute lg:inset-8 lg:px-8">
        {children}
      </div>
    </div>
  );
};
