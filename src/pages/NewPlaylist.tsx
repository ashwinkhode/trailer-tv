import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { MY_PLAYLISTS_QUERY } from '~/components/PlaylistGrid/PlaylistGrid';
import SEO from '~/components/SEO/SEO';
import { useNewPlaylistMutation } from '~/generated/graphql';

const NewPlaylist = () => {
  const navigate = useNavigate();
  const [inputError, setInputError] = useState('');

  const {
    register,
    handleSubmit,
    // getValues,
    reset,
    formState: { errors: formFieldError },
  } = useForm();

  const [newPlaylist] = useNewPlaylistMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [{ query: MY_PLAYLISTS_QUERY }],
    onCompleted: () => {
      reset();
      navigate('/playlists', { replace: true });
    },
  });

  const onSubmit = async ({ playlistName }: { playlistName: string }) => {
    try {
      await newPlaylist({
        variables: {
          inputData: {
            playlistName,
          },
        },
      });
    } catch (err) {
      setInputError(
        err.message.includes('duplicate')
          ? 'This name is already taken'
          : 'Please try again'
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-start space-y-4 h-5/6 px-4 lg:py-6 lg:px-10 lg:mt-8">
      <SEO title="Create New Playlist - TrailerTV | A Platform for Trailers" />
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold lg:font-bold text-lg lg:text-2xl">
          Create New Playlist
        </h1>
      </div>
      <form
        className="relative max-w-md flex flex-col justify-center space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label aria-labelledby="playlistName" htmlFor="playlistName">
          Playlist Name
          {formFieldError.playlistName?.type === 'required' && (
            <span className="text-red-500 mx-2">Playlist Name is required</span>
          )}
          {inputError && <div className="text-red-500">{inputError}</div>}
        </label>

        <input
          className="w-full rounded focus:outline-none px-2 py-2 bg-[#333333] text-gray-50 border-gray-500 border-b-2 truncate"
          type="text"
          id="playlistName"
          {...register('playlistName', { required: true })}
        />
        <button
          type="submit"
          className={clsx(
            // loading ? 'bg-gray-500!' : '',
            'w-full mt-8 px-2 py-2 bg-[#FF3333] hover:bg-[#FF4444] active:bg-[#CC0000] font-medium rounded'
          )}
        >
          Create New Playlist
        </button>
      </form>
    </div>
  );
};

export default NewPlaylist;
