import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSauce } from '../contexts/SauceContext';

const NavigationButton: React.FC<{
  icon: string;
  onClick: () => void;
  disabled?: boolean;
}> = ({ icon, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className='flex items-center justify-center px-3 py-2 text-white hover:bg-[#4d4d4d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
  >
    <i className={`fa ${icon}`} />
  </button>
);

export default function ImageNavigation() {
  const { thumbnailNumber } = useParams<{ thumbnailNumber: string }>();
  const navigate = useNavigate();
  const { id, pages } = useSauce();

  const pageNum = parseInt(thumbnailNumber || '1');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && pageNum > 1) {
        navigate(`/sauce/${id}/${pageNum - 1}`, { state: { pages } });
      }
      if (e.key === 'ArrowRight' && pageNum < pages) {
        navigate(`/sauce/${id}/${pageNum + 1}`, { state: { pages } });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, pageNum, id, pages]);

  return (
    <div className='bg-[#383838] text-white flex justify-between items-center'>
      {/* Left */}
      <NavigationButton
        icon='fa-reply'
        onClick={() => navigate(`/sauce/${id}`, { state: { pages } })}
      />

      {/* Middle */}
      <div className='flex items-center gap-2'>
        <NavigationButton
          icon='fa-step-backward'
          onClick={() => pageNum > 1 && navigate(`/sauce/${id}/1`, { state: { pages } })}
          disabled={pageNum === 1}
        />

        <NavigationButton
          icon='fa-chevron-left'
          onClick={() => pageNum > 1 && navigate(`/sauce/${id}/${pageNum - 1}`, { state: { pages } })}
          disabled={pageNum === 1}
        />

        <span className='mx-4 font-bold whitespace-nowrap'>
          {pageNum} / {pages}
        </span>

        <NavigationButton
          icon='fa-chevron-right'
          onClick={() => pageNum < pages && navigate(`/sauce/${id}/${pageNum + 1}`, { state: { pages } })}
          disabled={pageNum === pages}
        />

        <NavigationButton
          icon='fa-step-forward'
          onClick={() => pageNum < pages && navigate(`/sauce/${id}/${pages}`, { state: { pages } })}
          disabled={pageNum === pages}
        />
      </div>

      {/* Right */}
      <NavigationButton icon='fa-cog' onClick={() => {}} />
    </div>
  );
}