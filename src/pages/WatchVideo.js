import React from 'react'
import SEO from '../components/SEO/SEO'
import {useLocation} from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'

const WatchVideo = () => {
  const router = useLocation()

  return (
    <div className='h-5/6 w-full py-6 px-10'>
      <SEO />
      <VideoPlayer />
    </div>
  )
}

export default WatchVideo
