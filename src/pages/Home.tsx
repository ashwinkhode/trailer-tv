import { BsArrowRight } from 'react-icons/bs';
import SmartCompressedImage from '../components/SmartCompressedImage/SmartCompressedImage';
import { useHome, useHomeDispatch } from '../context/HomeContext';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { trendingData } from '~/utils/thumbnailData';

const Home = () => {
  const { channel, title, description } = useHome();
  const dispatchToHome = useHomeDispatch();

  return (
    <div className="flex flex-col justify-between h-5/6 w-full py-6 px-10">
      <SEO />
      <div className="flex flex-col space-y-6 mt-8">
        <h2>{`${channel} Originals`}</h2>
        <div>
          <h1 className="font-bold text-4xl w-2/5">{title}</h1>
          <p className="opacity-80 w-2/5 mt-2 text-sm truncate">
            {description}
          </p>
        </div>
        <button className="w-1/3 flex text-lg">
          Watch Now
          <BsArrowRight className="w-16 h-6" />
        </button>
      </div>
      <div className="space-y-4">
        <h1 className="text-lg border-b-2 border-gray-100 lg:mr-8">
          Trending Trailers
        </h1>
        <div className="w-full flex flex-row space-x-6">
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
      </div>
    </div>
  );
};

export default Home;
