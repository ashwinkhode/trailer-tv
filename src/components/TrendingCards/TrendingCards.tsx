import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useHomeDispatch } from '~/context/HomeContext';
import { trendingData } from '~/utils/thumbnailData';
import SmartCompressedImage from '../SmartCompressedImage/SmartCompressedImage';

export default function TrendingCards() {
  const dispatchToHome = useHomeDispatch();
  return (
    <div className="w-full hidden lg:flex flex-row space-x-6 ">
      {trendingData.map(({ thumbnailURL, title, id }: any) => (
        <Link to={`watch/${id}`} key={title}>
          <img
            alt={title}
            src={
              thumbnailURL
                ? SmartCompressedImage(thumbnailURL, '200')
                : undefined
            }
            width="200"
            className="rounded-md"
            onMouseEnter={() => {
              if (dispatchToHome) {
                dispatchToHome({
                  payload: {
                    id,
                  },
                });
              }
            }}
          />
        </Link>
      ))}
      <Link to="trending">
        <button className="flex flex-col justify-center items-center p-5 space-y-2">
          <span>View More</span>
          <div className="group transition-all ease-in duration-200 w-12 h-12 p-2 rounded-full hover:bg-white hover:text-gray-900 hover:shadow-lg">
            <BsArrowRight className="text-3xl group-hover:stroke-[0.5px]" />
          </div>
        </button>
      </Link>
    </div>
  );
}
