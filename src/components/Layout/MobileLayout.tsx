import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';

export const MobileLayout = ({ children }: any, ...otherprops: any[]) => {
  return (
    <div
      className="relative w-full h-full bg-black bg-opacity-60 bg-blur lg:hidden"
      {...otherprops}
    >
      <div className="absolute top-0 left-0 w-full h-1/6 z-50">
        <Header />
      </div>
      <div className="w-full h-2/3 ">{children}</div>
      <div className="w-full absolute bottom-0 left-0 z-50">
        <Sidenav />
      </div>
    </div>
  );
};
