import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSauce } from '../contexts/SauceContext';

export default function ImageNavigation() {
  const { thumbnailNumber } = useParams();
  const navigate = useNavigate();
  const { id, pages } = useSauce();

  const pageNum = parseInt(thumbnailNumber);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft' && pageNum > 1) {
        navigate(`/sauce/${id}/${pageNum - 1}`, { state: { pages } });
      }

      if (e.key === 'ArrowRight' && pageNum < pages) {
        navigate(`/sauce/${id}/${pageNum + 1}`, { state: { pages } });
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, pageNum, id, pages]);

  return (
    <div className='bg-[#383838] text-white flex flex-row justify-between'>
      {/* Left Section */}
      <div className='flex items-start'>
        <div 
          className='text-white px-2.5 py-2.5 min-h-full min-w-[40px] flex items-center cursor-pointer' 
          onClick={() => navigate(`/sauce/${id}/`, { state: { pages } })}
        >
          <i className='fa fa-reply' />
        </div>
      </div>

      {/* Middle Section */}
      <div className='flex items-center'>
        {/* First Page */}
        <div 
          className='flex items-center justify-end cursor-pointer' 
          onClick={() => {if (pageNum > 1) navigate(`/sauce/${id}/1`, { state: { pages } });}}
        >
          <i className='fa fa-chevron-left' style={{ marginRight: '-30%' }} />
          <i className='fa fa-chevron-left' />
        </div>

        {/* Previous Page */}
        <div 
          className='flex items-center cursor-pointer' 
          onClick={() => {if (pageNum > 1) navigate(`/sauce/${id}/${pageNum - 1}`, { state: { pages } });}}
        >
          <i className='fa fa-chevron-left' />
        </div>

        {/* Page Number */}
        <div className='mx-2.5 font-bold'>
          {thumbnailNumber} / {pages}
        </div>

        {/* Next Page */}
        <div 
          className='flex items-center cursor-pointer' 
          onClick={() => {if (pageNum < pages) navigate(`/sauce/${id}/${pageNum + 1}`, { state: { pages } });}}
        >
          <i className='fa fa-chevron-right' />
        </div>

        {/* Last Page */}
        <div 
          className='flex items-center cursor-pointer' 
          onClick={() => {if (pageNum < pages) navigate(`/sauce/${id}/${pages}`, { state: { pages } });}}
        >
          <i className='fa fa-chevron-right' style={{ marginRight: '-30%' }} />
          <i className='fa fa-chevron-right' />
        </div>
      </div>

      {/* Right Section */}
      <div className='flex items-end'>
        <div></div>
        <div className='text-white px-2.5 py-2.5 min-h-full min-w-[40px] flex items-center cursor-pointer'>
          <i className='fa fa-cog' />
        </div>
      </div>
    </div>
  );
}