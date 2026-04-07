import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Thumbnail({ sauce }) {
  const [thumbnailData, setThumbnailData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (sauce && sauce.pages) {
      axios(`http://localhost:8080/api/images/${sauce.id}?pages=${sauce.pages}`)
        .then(res => setThumbnailData(res.data))
        .catch(err => console.error('Erreur:', err));
    }
  }, [sauce]);

  if (!thumbnailData.length) return <p>Chargement...</p>;

  return (
    <div className='my-2.5 mx-auto p-12 rounded-[5px] w-full max-w-[80%] bg-[#1f1f1f] flex flex-wrap justify-between'>
      {thumbnailData.map((url, index) => (
        <div 
          key={index}
          className='m-[0_0.5em_0.5em_0.5em] cursor-pointer'
          onClick={() => navigate(`/sauce/${sauce.id}/${index + 1}`, {state: { pages: sauce.pages }})}
        >
          <img 
            className='h-[280px] w-[200px] rounded-[0.3em]' 
            loading='lazy' 
            src={url} 
            alt={`Thumbnail ${index + 1}`} 
          />
        </div>
      ))}
    </div>
  );
}