import {BsArrowRight} from 'react-icons/bs'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Header />
      <div className='flex flex-col justify-between h-5/6 py-6 px-10'>
        <div className='w-full flex flex-col space-y-8 mt-8'>
          <h2>
            Tutflix Originals
          </h2>
          <div>
            <h1 className='font-bold text-4xl'>
              Bad Boys For Life - Official Trailer
            </h1>
            <p className='opacity-80 w-2/5 mt-2 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam sunt iusto! Asperiores quidem molestias suscipit distinctio velit quo odit.
            </p>
          </div>
          <button
            className='w-1/3 flex text-lg'
          >
            Watch Now
              <BsArrowRight className='w-16 h-6' />
          </button>
        </div>
        <div className='space-y-4'>
          <h1 className='text-lg border-b-2 border-gray-100 lg:mr-8'>
            Latest Trailers
            </h1>
          <div className='w-full flex flex-row space-x-6'>
            <img
              src='../assets/trailer1.jpg'
              width='200'
              className='rounded'
            />
            <img
              src='../assets/trailer2.jpg'
              width='200'
              className='rounded'
            />
            <img
              src='../assets/trailer3.jpg'
              width='200'
              className='rounded'
            />
            <img
              src='../assets/trailer4.jpg'
              width='200'
              className='rounded'
            />
            <img
              src='../assets/trailer5.jpg'
              width='200'
              className='rounded'
            />
            <button
              className='flex flex-col justify-center items-center p-5 space-y-2'
            >
              <span>
                View More
              </span>
              <div
                className='group w-12 h-12 p-2 rounded-full hover:bg-white hover:text-gray-900 hover:shadow-lg'
              >
                <BsArrowRight className='text-3xl group-hover:stroke-[0.5px]' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home