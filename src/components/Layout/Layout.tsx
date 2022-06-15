import clsx from 'clsx';
import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';

export const Layout = ({ children }: any, ...otherprops: any[]) => {
  return (
    <div
      className="relative max-w-[1280px] w-full h-full lg:flex-row lg:justify-between lg:mx-auto lg:rounded-3xl bg-black bg-opacity-75 bg-blur overflow-hidden !opacity-100"
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
          <Sidenav />
        </div>
      </div>
      <div className="min-w-full w-full h-full overflow-y-auto lg:absolute lg:inset-0 lg:pt-8 lg:pl-20">
        {children}
      </div>
    </div>
  );
};
