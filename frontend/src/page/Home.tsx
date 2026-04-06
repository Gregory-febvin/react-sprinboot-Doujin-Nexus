import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMangaList } from '../services/api';
import type { Manga } from '../types';

export default function Home() {
  const [items, setItems] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMangaList()
      .then(data => setItems(data))
      .catch(err => {
        console.error('Erreur:', err);
        setError('Impossible de charger les mangas.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap justify-center gap-5 w-4/5 mx-auto mt-[1%]">
      {items.map(item => (
        <div key={item.id} 
          className="w-52 flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
          onClick={() => navigate(`/sauce/${item.id}`)}>
          <img src={item.cover} alt={`Cover ${item.id}`} className="w-52 h-80 object-cover block"/>
          <div className="p-2.5 font-bold text-sm text-center text-[16px] overflow-hidden">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
