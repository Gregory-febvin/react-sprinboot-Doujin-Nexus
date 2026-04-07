import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ParodiesList() {
  const [parodies, setParodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/parodies')
      .then(res => setParodies(res.data))
      .catch(err => console.error('Erreur:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className='text-white text-center p-10'>Chargement...</p>;

  return (
    <div className='p-5'>
      <h1 className='text-3xl font-bold text-white mb-5'>Séries</h1>
      <div className='flex flex-wrap gap-2'>
        {parodies.map(parody => (
          <button
            key={parody.id}
            onClick={() => navigate(`/parodies/${parody.name}`)}
            className='bg-[#4d4d4d] hover:bg-[#5d5d5d] text-white px-4 py-2 rounded transition'
          >
            {parody.name}
          </button>
        ))}
      </div>
    </div>
  );
}