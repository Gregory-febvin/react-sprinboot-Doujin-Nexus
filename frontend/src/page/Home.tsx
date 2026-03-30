import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api/manga')
      .then(res => setItems(res.data))
      .catch(err => console.error('Erreur:', err));
  }, []);

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
