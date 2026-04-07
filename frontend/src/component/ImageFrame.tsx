import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { SauceContext } from '../contexts/SauceContext';
import ImageNavigation from './ImageNavigation';

export default function ImageFrame() {
  const { id, thumbnailNumber } = useParams();
  const location = useLocation();
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const pages = location.state?.pages ?? 1;
  const pageNum = parseInt(thumbnailNumber);

  // Utiliser le bon port et le bon format de fichier
  const imageUrl = `http://localhost:8080/api/manga/${id}/image/${thumbnailNumber}.jpg`;

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  }, []);

  function handleImageClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const half = rect.width / 2;

    if (clickX < half && pageNum > 1) {
      // Left half
      navigate(`/sauce/${id}/${pageNum - 1}`, { state: { pages } });
    } else if (clickX >= half && pageNum < pages) {
      // Right half
      navigate(`/sauce/${id}/${pageNum + 1}`, { state: { pages } });
    }
  }

  return (
    <SauceContext.Provider value={{ id, pages }}>
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