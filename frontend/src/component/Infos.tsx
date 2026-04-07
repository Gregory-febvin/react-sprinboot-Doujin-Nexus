import { useNavigate } from 'react-router-dom';

export default function Infos({sauce}) {
  const navigate = useNavigate();

  if (!sauce) return <p>Chargement...</p>;

  return (
   <div className='flex justify-center items-start gap-[30px] my-[2%] mx-auto p-[30px_20px] rounded-[5px] w-full max-w-[80%] bg-[#1f1f1f]'>
        
        {/* Main Cover */}
        <div className='w-[351px] text-center'>
            <img 
              className='w-[350px] h-auto rounded-[5px] object-cover cursor-pointer' 
              loading='lazy' 
              src={sauce.cover} 
              alt={sauce.title} 
              rel='nofollow' 
              onClick={() => navigate(`/sauce/${sauce.id}/1`, {state: { pages: sauce.pages }})}
            />
        </div>

        {/* Main Infos */}
        <div className='flex flex-col pl-[20px] w-[55%] space-y-3'>
            
            {/* Title */}
            <div className='font-bold'>
                <h1 className='text-2xl font-bold m-0'>{sauce.title}</h1>
            </div>

            {/* ID */}
            <div className='font-bold'>
                <h3 className='text-base text-[#bbb] cursor-pointer'>{sauce.id}</h3>
            </div>

            {/* Artists */}
            {sauce.artists && sauce.artists.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Artists: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                {sauce.artists.map((artist, index) => (
                    <a 
                      key={index} 
                      className='inline-flex h-7' 
                      href={`/artists/${artist.name}`}
                    >
                      <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl whitespace-nowrap'>{artist.name}</span>
                      <span className='bg-[#333] px-2 py-1 flex items-center text-xs text-[#ccc] rounded-tr rounded-br whitespace-nowrap'>35K</span>
                    </a>
                ))}
                </span>
            </div>
            )}

            {/* Magazines */}
            {sauce.magazines && sauce.magazines.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Magazine: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                {sauce.magazines.map((magazine, index) => (
                    <a 
                      key={index} 
                      className='inline-flex h-7' 
                      href={`/magazine/${magazine.name}`}
                    >
                      <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl whitespace-nowrap'>{magazine.name}</span>
                      <span className='bg-[#333] px-2 py-1 flex items-center text-xs text-[#ccc] rounded-tr rounded-br whitespace-nowrap'>35K</span>
                    </a>
                ))}
                </span>
            </div>
            )}

            {/* Parodies */}
            {sauce.parodies && sauce.parodies.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Parodies: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                {sauce.parodies.map((parody, index) => (
                    <a 
                      key={index} 
                      className='inline-flex h-7' 
                      href={`/parodies/${parody.name}`}
                    >
                      <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl whitespace-nowrap'>{parody.name}</span>
                      <span className='bg-[#333] px-2 py-1 flex items-center text-xs text-[#ccc] rounded-tr rounded-br whitespace-nowrap'>35K</span>
                    </a>
                ))}
                </span>
            </div>
            )}

            {/* Publisher */}
            {sauce.publisher && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Publisher: </span>
                <span className='inline-flex flex-wrap gap-1 ml-2'>
                <a 
                  className='inline-flex h-7' 
                  href={`/publisher/${sauce.publisher.name}`}
                >
                  <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl whitespace-nowrap'>{sauce.publisher.name}</span>
                  <span className='bg-[#333] px-2 py-1 flex items-center text-xs text-[#ccc] rounded-tr rounded-br whitespace-nowrap'>35K</span>
                </a>
                </span>
            </div>
            )}

            {/* Tags */}
            {sauce.tags && sauce.tags.length > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Tags: </span>
                <div className='flex flex-wrap gap-1 mt-1'>
                {sauce.tags.map((tag, index) => (
                    <a 
                      key={index} 
                      className='inline-flex h-7' 
                      href={`/tags/${tag.name}`}
                    >
                      <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl whitespace-nowrap'>{tag.name}</span>
                      <span className='bg-[#333] px-2 py-1 flex items-center text-xs text-[#ccc] rounded-tr rounded-br whitespace-nowrap'>35K</span>
                    </a>
                ))}
                </div>
            </div>
            )}

            {/* Pages */}
            {sauce.pages && sauce.pages > 0 && (
            <div className='font-bold text-sm text-[#ddd]'>
                <span className='text-[16px]'>Pages: </span>
                <span className='inline-flex gap-1 ml-2'>
                <a className='inline-flex h-7'>
                  <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl rounded-tr rounded-br whitespace-nowrap'>{sauce.pages}</span>
                </a>
                </span>
            </div>
            )}

        </div>
   </div>
  );
}