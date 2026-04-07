import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import type { Manga } from '../types';
import { API_ENDPOINTS } from '../config/api';
import { LoadingSpinner } from './shared/LoadingSpinner';

interface ThumbnailProps {
  sauce: Manga;
}

export default function Thumbnail({ sauce }: ThumbnailProps) {
  const [thumbnailData, setThumbnailData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (sauce && sauce.pages) {
      axios
        .get<string[]>(`${API_ENDPOINTS.IMAGES}/${sauce.id}?pages=${sauce.pages}`)
        .then(res => {
          setThumbnailData(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Erreur:', err);
          setLoading(false);
        });
    }
  }, [sauce]);

  if (loading) return <LoadingSpinner />;
  if (thumbnailData.length === 0) return <div className='text-white text-center p-10'>Aucune image</div>;

  return (
    <div className='my-2.5 mx-auto p-12 rounded-[5px] w-full max-w-[80%] bg-[#1f1f1f] flex flex-wrap justify-between gap-2'>
      {thumbnailData.map((url, index) => (
        <div
          key={index}
          className='cursor-pointer hover:opacity-80 transition-opacity'
          onClick={() => navigate(`/sauce/${sauce.id}/${index + 1}`, { state: { pages: sauce.pages } })}
        >
          <img
            className='h-[280px] w-[200px] rounded-[0.3em] object-cover'
            loading='lazy'
            src={url}
            alt={`Thumbnail ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}