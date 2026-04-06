import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IMAGE_API_BASE } from '../services/api';

interface ThumbnailProps {
  sauce: { id: number; pages: number } | null;
}

export default function Thumbnail({ sauce }: ThumbnailProps) {
  const [thumbnailData, setThumbnailData] = useState<string[] | null>(null);

  useEffect(() => {
    if (sauce) {
      axios.get<string[]>(`${IMAGE_API_BASE}/image/${sauce.id}?pages=${sauce.pages}`)
        .then(res => setThumbnailData(res.data))
        .catch(err => console.error('Erreur:', err));
    }
  }, [sauce]);

  if (!thumbnailData) return <p>Chargement...</p>;

  return (
        <div className='thumbnail-container'>
        {thumbnailData.map((url, index) => (
            <Link key={url} to={`/sauce/${sauce!.id}/${index + 1}`} state={{ pages: sauce!.pages }}>
              <div className='thumbnail-image'>
                <img className='gallerythumb' loading='lazy' src={url} alt={`Thumbnail ${index + 1}`} />
              </div>
            </Link>
        ))}
        </div>
  );
}

