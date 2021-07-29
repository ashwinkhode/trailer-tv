import { useState } from 'react';
import { MdPlaylistPlay, MdPlayArrow } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PlaylistCard = ({
  title = 'Must Watch Trailers of 2021',
  channel = 'Omkar Kulkarni',
  thumbnailURL = '../../assets/trailer1.jpg',
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="min-w-full h-full flex flex-col rounded-xl overflow-hidden bg-[#1A1A1A] shadow-thumbnailCard"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative w-full">
        <div className="absolute flex justify-end w-full h-full ">
          {isHover ? (
            <Link to="/" className="absolute w-full h-full">
              <div className=" w-full h-full flex justify-center items-center space-x-2 bg-[rgba(0,0,0,0.8)]">
                <MdPlayArrow className="w-6 h-6" />
                <span>PLAY ALL</span>
              </div>
            </Link>
          ) : null}
          <div className="w-1/2 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)]">
            <div>
              <MdPlaylistPlay />
            </div>
            <p>10+</p>
          </div>
        </div>
        <img src={thumbnailURL} alt={title} aria-label={title} />
      </div>
      <div className="w-full p-3">
        <h1 className="font-medium opacity-90">{title}</h1>
        <h2 className="opacity-60 inline-flex items-center gap-x-2 text-sm">
          {channel}
        </h2>
        <Link to="/">
          <div className="opacity-60 text-sm font-medium mt-1 hover:opacity-100">
            VIEW PLAYLIST
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlaylistCard;
