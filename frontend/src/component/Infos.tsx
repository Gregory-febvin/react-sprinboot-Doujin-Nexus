import { Link } from 'react-router-dom';
import TagBadge from './TagBadge';
import type { Manga } from '../types';

interface InfosProps {
  sauce: Manga | null;
}

export default function Infos({ sauce }: InfosProps) {
  if (!sauce) return <p>Chargement...</p>;

  return (
   <div className='flex justify-center items-start gap-[30px] my-[2%] mx-auto p-[30px_20px] rounded-[5px] w-full max-w-[80%] bg-[#1f1f1f]'>
        
        {/* Main Cover */}
        <div className='w-[351px] text-center'>
            <Link to={`/sauce/${sauce.id}/1`} state={{ pages: sauce.pages }}>
              <img 
                className='w-[350px] h-auto rounded-[5px] object-cover cursor-pointer' 
                loading='lazy' 
                src={sauce.cover} 
                alt={sauce.title} 
              />
            </Link>
        </div>

        {/* Main Infos */}
        <div className='flex flex-col pl-[20px] w-[55%] space-y-3'>
            
            {/* Title */}
            <div className='font-bold'>
                <h1 className='text-2xl font-bold m-0'>{sauce.title}</h1>
            </div>

            {/* ID */}
            <div className='font-bold'>
                <h3 className='text-base text-[#bbb]'>{sauce.id}</h3>
            </div>

            {/* Artists */}
            {sauce.artists && sauce.artists.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Artists: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                {sauce.artists.map((artist) => (
                    <TagBadge key={artist.name} name={artist.name} href={`/artist/${artist.name}`} />
                ))}
                </span>
            </div>
            )}

            {/* Magazines */}
            {sauce.magazines && sauce.magazines.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Magazine: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                {sauce.magazines.map((magazine) => (
                    <TagBadge key={magazine.name} name={magazine.name} href={`/magazine/${magazine.name}`} />
                ))}
                </span>
            </div>
            )}

            {/* Parodies */}
            {sauce.parodies && sauce.parodies.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Parodies: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                {sauce.parodies.map((parody) => (
                    <TagBadge key={parody.name} name={parody.name} href={`/parodie/${parody.name}`} />
                ))}
                </span>
            </div>
            )}

            {/* Publisher */}
            {sauce.publisher && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Publisher: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                    <TagBadge name={sauce.publisher.name} href={`/publisher/${sauce.publisher.name}`} />
                </span>
            </div>
            )}

            {/* Tags */}
            {sauce.tags && sauce.tags.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Tags: </span>
                <div className='flex flex-wrap gap-1 mt-1'>
                {sauce.tags.map((tag) => (
                    <TagBadge key={tag.name} name={tag.name} href={`/tag/${tag.name}`} />
                ))}
                </div>
            </div>
            )}

            {/* Pages */}
            {sauce.pages && sauce.pages > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Pages: </span>
                <span className='inline-flex gap-1 ml-2'>
                    <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded whitespace-nowrap'>{sauce.pages}</span>
                </span>
            </div>
            )}

        </div>
   </div>
  );
}