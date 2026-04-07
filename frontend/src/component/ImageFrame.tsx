import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { SauceContext } from '../contexts/SauceContext';
import ImageNavigation from './ImageNavigation';
import { API_ENDPOINTS } from '../config/api';

export default function ImageFrame() {
  const { id, thumbnailNumber } = useParams<{ id: string; thumbnailNumber: string }>();
  const location = useLocation();
  const imageRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  const pages = location.state?.pages ?? 1;
  const pageNum = parseInt(thumbnailNumber || '1');

  const imageUrl = `${API_ENDPOINTS.MANGA}/${id}/image/${thumbnailNumber}.jpg`;

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  }, [thumbnailNumber]);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const half = rect.width / 2;

    if (clickX < half && pageNum > 1) {
      navigate(`/sauce/${id}/${pageNum - 1}`, { state: { pages } });
    } else if (clickX >= half && pageNum < pages) {
      navigate(`/sauce/${id}/${pageNum + 1}`, { state: { pages } });
    }
  };

  return (
    <SauceContext.Provider value={{ id: id || '', pages }}>
      <ImageNavigation />
      <img
        ref={imageRef}
        className='h-screen w-auto block mx-auto'
        src={imageUrl}
        alt={`Page ${thumbnailNumber}`}
        onClick={handleImageClick}
      />
      <ImageNavigation />
    </SauceContext.Provider>
  );
}