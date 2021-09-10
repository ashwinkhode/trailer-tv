import { useQuery } from '@apollo/client';
import clsx from 'clsx';
import {
  BaseSyntheticEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { GrClose } from 'react-icons/gr';
import { MdPlaylistAdd } from 'react-icons/md';
import Modal from 'react-modal';
import {
  My_PlaylistsQuery,
  useAdd_Video_To_PlaylistMutation,
} from '~/generated/graphql';
import { MY_PLAYLISTS_QUERY } from '../PlaylistGrid/PlaylistGrid';

Modal.setAppElement('#root');

export default function AddToPlaylistModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({ selectedOption: '' });
  const { data, error } = useQuery<My_PlaylistsQuery>(MY_PLAYLISTS_QUERY);
  const [addVideoToPlaylist] = useAdd_Video_To_PlaylistMutation({
    refetchQueries: [{ query: MY_PLAYLISTS_QUERY }],
    fetchPolicy: 'no-cache',
  });

  const customStyles: Modal.Styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(24, 24, 24)',
    },
    overlay: {
      backgroundColor: 'transparent',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={() => {
          openModal();
        }}
        className={clsx('flex space-x-1 text-sm')}
      >
        <MdPlaylistAdd className="w-6 h-6" />
        <span>Add to Playlist</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="font-bold sm:text-lg lg:text-2xl">Add To Playlist</h2>
          <button onClick={closeModal} className="p-1.5 w-8 h-8">
            <GrClose className="remove-video-btn w-full h-full" />
          </button>
        </div>
        <div className="opacity-80 my-2">
          Choose a playlist to add this video
        </div>
        <form
          onSubmit={(e: BaseSyntheticEvent) => {
            e.preventDefault();
            // TODO: Take videoId as Props when done removing localdata
            console.log('');
            // addVideoToPlaylist({
            //   variables: {
            //     inputData: {
            //       playlistId: formState.selectedOption,
            //       videoId: '',
            //     },
            //   },
            // });
          }}
          className="flex flex-col gap-2"
        >
          {error?.message || data?.myPlaylists.length === 0 ? (
            <p className="text-red-500">
              {'Create a playlist first' ?? error?.message}
            </p>
          ) : (
            data?.myPlaylists.map((playlist) => (
              <label key={playlist.playlistId} htmlFor={playlist.playlistId}>
                <input
                  type="radio"
                  id={playlist.playlistId}
                  name={playlist.playlistName}
                  value={playlist.playlistId}
                  checked={formState.selectedOption === playlist.playlistId}
                  onChange={(e) =>
                    setFormState({
                      selectedOption: e.target.value,
                    })
                  }
                  className="mr-2"
                />
                {playlist.playlistName + ' '}
                <span className="text-xs opacity-80">
                  ({playlist.videos?.length} Videos)
                </span>
              </label>
            ))
          )}
          <button
            type="submit"
            className="mt-2 px-2 py-1 bg-[#FF3333] hover:bg-[#FF4444] active:bg-[#CC0000] rounded"
          >
            Add To Playlist
          </button>
        </form>
      </Modal>
    </div>
  );
}
