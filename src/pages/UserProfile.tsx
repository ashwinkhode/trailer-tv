import { useEffect } from 'react';
import Avatar from 'react-avatar';
import { useNavigate } from 'react-router';
import SEO from '~/components/SEO/SEO';
// import { useUser } from '~/context/UserContext';
import { useMeQuery } from '~/generated/graphql';

export default function UserProfile() {
  // const { user, setUser } = useUser();
  const navigate = useNavigate();
  const { data, loading, error } = useMeQuery({
    fetchPolicy: 'no-cache',
  });
  const name = data?.me?.email.substring(0, data.me.email.indexOf('@'));

  useEffect(() => {
    if (!data?.me?.userId && !loading) {
      navigate('/login', { replace: true });
    }
  }, [data, loading]);

  if (loading)
    return (
      <p className="flex flex-col w-full justify-center items-center h-[85vh] px-4 lg:py-6 lg:px-10">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex flex-col w-full justify-center items-center h-[85vh] px-4 lg:py-6 lg:px-10">
        Please Try Again! {error && ` Error: ${error.message}`}
      </p>
    );
  if (data?.me === null) return <p>No User Found. Please Log in again</p>;
  return (
    <div className="flex flex-col w-full justify-center items-center h-[85vh] px-4 lg:py-6 lg:px-10">
      <SEO />
      <Avatar email={data?.me?.email} name={name} round={true} />
      <div className="m-8 mx-auto">{data?.me?.email}</div>
      <button
        className="py-2 px-4 text-gray-900 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 rounded-full border-none focus:outline-none"
        onClick={() => console.log('Logged Out')}
      >
        Logout
      </button>
    </div>
  );
}
