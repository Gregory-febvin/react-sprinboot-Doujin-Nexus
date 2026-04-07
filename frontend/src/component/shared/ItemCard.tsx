import { useNavigate } from 'react-router-dom';
import type { Manga } from '../../types';

interface ItemCardProps {
  item: Manga;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-52 flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
      onClick={() => navigate(`/sauce/${item.id}`)}
    >
      <img
        src={item.cover}
        alt={`Cover ${item.id}`}
        className="w-52 h-80 object-cover block"
        loading="lazy"
      />
      <div className="p-2.5 font-bold text-sm text-center text-white w-full h-14 flex items-center justify-center">
        <p className="line-clamp-2 break-words">
          {item.title}
        </p>
      </div>
    </div>
  );
};