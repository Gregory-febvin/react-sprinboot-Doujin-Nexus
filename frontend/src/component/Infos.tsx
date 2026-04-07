import { useNavigate } from 'react-router-dom';
import type { Manga } from '../types';
import { TagBadge } from './shared/TagBadge';

interface InfosProps {
  sauce: Manga | null;
}

const renderBadgeList = (
  label: string,
  items: Array<{ id: number; name: string }> | undefined,
  navigate: (path: string) => void
) => {
  if (!items || items.length === 0) return null;

  return (
    <div className='font-bold text-sm text-[#ddd]'>
      <span className='text-[16px]'>{label}: </span>
      <div className='inline-flex flex-wrap gap-1 ml-2'>
        {items.map(item => (
          <TagBadge
            key={item.id}
            label={label}
            value={item.name}
            link={`/${label.toLowerCase()}/${item.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Infos({ sauce }: InfosProps) {
  const navigate = useNavigate();

  if (!sauce) return <div className='text-white text-center p-10'>Chargement...</div>;

  return (
    <div className='flex justify-center items-start gap-[30px] my-[2%] mx-auto p-[30px_20px] rounded-[5px] w-full max-w-[80%] bg-[#1f1f1f]'>
      {/* Main Cover */}
      <div className='w-[351px] text-center'>
        <img
          className='w-[350px] h-auto rounded-[5px] object-cover cursor-pointer hover:opacity-80 transition-opacity'
          loading='lazy'
          src={sauce.cover}
          alt={sauce.title}
          onClick={() => navigate(`/sauce/${sauce.id}/1`, { state: { pages: sauce.pages } })}
        />
      </div>

      {/* Main Infos */}
      <div className='flex flex-col pl-[20px] w-[55%] space-y-3'>
        <div className='font-bold'>
          <h1 className='text-2xl font-bold m-0 text-white'>{sauce.title}</h1>
        </div>

        <div className='font-bold'>
          <h3 className='text-base text-[#bbb]'>{sauce.id}</h3>
        </div>

        {renderBadgeList('Artists', sauce.artists, navigate)}
        {renderBadgeList('Magazines', sauce.magazines, navigate)}
        {renderBadgeList('Parodies', sauce.parodies, navigate)}
        {sauce.publisher && renderBadgeList('Publishers', [sauce.publisher], navigate)}
        {renderBadgeList('Tags', sauce.tags, navigate)}

        {sauce.pages > 0 && (
          <div className='font-bold text-sm text-[#ddd]'>
            <span className='text-[16px]'>Pages: </span>
            <span className='inline-flex gap-1 ml-2'>
              <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded whitespace-nowrap text-white'>
                {sauce.pages}
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}