import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchManga } from '../services/api';
import type { Manga } from '../types';

import Infos from '../component/Infos';
import Thumbnail from '../component/Thumbnails';

export default function Sauce() {
  const { id } = useParams();
  const [sauce, setSauce] = useState<Manga | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchManga(id)
        .then(data => setSauce(data))
        .catch(err => {
          console.error('Erreur:', err);
          setError('Impossible de charger le manga.');
        });
    }
  }, [id]);

  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
  <div className='sauce'>
    <Infos sauce={sauce} />
    <Thumbnail sauce={sauce} />
  </div>
  );
}

