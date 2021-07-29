import { BsArrowRight } from 'react-icons/bs';
import { useHome } from '../context/HomeContext';
import SEO from '../components/SEO/SEO';
import TrendingCards from '~/components/TrendingCards/TrendingCards';
import CardCarousel from '~/components/TrendingCards/CardCarousel';

const Home = () => {
  const { channel, title } = useHome();

  return (
    <div className="flex flex-col justify-between w-full h-[85vh] px-4 lg:py-6 lg:px-10">
      <SEO />
      <div className="flex flex-col space-y-2 lg:space-y-4 mt-8">
        <h2 className="text-base">{`${channel} Originals`}</h2>
        <div>
          <h1 className="font-bold text-2xl lg:text-4xl lg:w-2/5">{title}</h1>
        </div>
        <button className="lg:max-w-[10rem] flex lg:text-base">
          Watch Now
          <BsArrowRight className="lg:w-16 w-8 h-6" />
        </button>
      </div>
      <div className="space-y-4 mb-6">
        <h1 className="text-lg border-b-2 border-gray-100 lg:mr-8">
          Trending Trailers
        </h1>
        <TrendingCards />
        <CardCarousel />
      </div>
    </div>
  );
};

export default Home;
