import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';

export default function Browse() {
  const { type } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const typeMapping = {
    'parodies': 'parodies',
    'tags': 'tags',
    'artists': 'artists',
    'magazines': 'magazines'
  };

  useEffect(() => {
    if (type && typeMapping[type]) {
      setLoading(true);
      const apiUrl = `http://localhost:8080/api/${typeMapping[type]}`;
      
      axios.get(apiUrl)
        .then(res => setItems(res.data))
        .catch(err => console.error('Erreur:', err))
        .finally(() => setLoading(false));
    }
  }, [type]);

  if (loading) return <p className='text-white text-center p-10'>Chargement...</p>;

  if (items.length === 0) return <p className='text-white text-center p-10'>Aucun résultat</p>;

  return (
    <div>
      <h1 className='text-3xl font-bold text-white p-5 text-center'>
        {type}
      </h1>
      <Home items={items} />
    </div>
  );
}