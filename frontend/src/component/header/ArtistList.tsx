import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ArtistsList() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/artists')
      .then(res => setArtists(res.data))
      .catch(err => console.error('Erreur:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className='text-white text-center p-10'>Chargement...</p>;

  return (
    <div className='p-5'>
      <h1 className='text-3xl font-bold text-white mb-5'>Artistes</h1>
      <div className='flex flex-wrap gap-2'>
        {artists.map(artist => (
          <button
            key={artist.id}
            onClick={() => navigate(`/artists/${artist.name}`)}
            className='bg-[#4d4d4d] hover:bg-[#5d5d5d] text-white px-4 py-2 rounded transition'
          >
            {artist.name}
          </button>
        ))}
      </div>
    </div>
  );
}