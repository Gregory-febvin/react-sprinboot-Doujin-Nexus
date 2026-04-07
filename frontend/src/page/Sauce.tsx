import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import type { Manga } from '../types';
import { API_ENDPOINTS } from '../config/api';
import Infos from '../component/Infos';
import Thumbnail from '../component/Thumbnails';
import { LoadingSpinner, ErrorMessage } from '../component/shared/LoadingSpinner';

export default function Sauce() {
  const { id } = useParams<{ id: string }>();
  const url = id ? `${API_ENDPOINTS.MANGA}/${id}` : '';
  const { data: sauce, loading, error } = useFetch<Manga>(url);

  if (loading) return <LoadingSpinner message="Chargement du manga..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!sauce) return <ErrorMessage message="Manga non trouvé" />;

  return (
    <div className='sauce'>
      <Infos sauce={sauce} />
      <Thumbnail sauce={sauce} />
    </div>
  );
}