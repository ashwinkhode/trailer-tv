import { useParams } from 'react-router-dom';

export default function Playlist() {
  const { id } = useParams();
  return <div>Playlist id - {id}</div>;
}
