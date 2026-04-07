import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import type { Manga } from '../types';
import { API_ENDPOINTS } from '../config/api';
import Home from '../page/Home';
import { LoadingSpinner, ErrorMessage } from './shared/LoadingSpinner';

interface SearchResultsProps {
  type: string;
}

export default function SearchResults({ type }: SearchResultsProps) {
  const { query } = useParams<{ query: string }>();
  const url = query ? `${API_ENDPOINTS[type.toUpperCase() as keyof typeof API_ENDPOINTS]}/search/${query}` : '';
  const { data: items, loading, error } = useFetch<Manga>(url);

  if (loading) return <LoadingSpinner message="Recherche en cours..." />;
  if (error) return <ErrorMessage message={`Erreur: ${error}`} />;
  if (!items || items.length === 0) return <ErrorMessage message={`Aucun résultat pour "${query}"`} />;

  return (
    <div>
      <h1 className='text-3xl font-bold text-white p-5 text-center'>
        Résultats pour <span className='text-green-400'>{query}</span>
      </h1>
      <Home items={items} />
    </div>
  );
}