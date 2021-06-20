import {FiSearch} from 'react-icons/fi'

const Searchbar = () => {
  return (
    <div className='flex flex-row w-full h-full'>
      <input
        className='search-input w-full h-full bg-[#121212] py-2 px-4 focus-within:bg-[#121212] focus:bg-[#121212]'
        type='text'
        placeholder='Search'
        name='search'
        aria-label='search trailers'
      />
      <div className='search-btn'>
        <button className='w-full h-full py-2 px-4 bg-[#121212]'>
          <FiSearch className='w-6 h-4' />
        </button>
      </div>
    </div>
  )
}

export default Searchbar
