import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from '../page/Home';

interface SearchResultsProps {
  type: string;
}

export default function SearchResults({ type }: SearchResultsProps) {
  const { query } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type && query) {
      const apiUrl = `http://localhost:8080/api/${type}/search/${query}`;
      
      axios.get(apiUrl)
        .then(res => setItems(res.data))
        .catch(err => console.error('Erreur:', err))
        .finally(() => setLoading(false));
    }
  }, [type, query]);

  if (loading) return <p className='text-white text-center p-10'>Chargement...</p>;

  if (items.length === 0) return <p className='text-white text-center p-10'>Aucun résultat</p>;

  return (
    <div>
      <h1 className='text-3xl font-bold text-white p-5 text-center'>
        Résultats pour {query}
      </h1>
      <Home items={items} />
    </div>
  );
}