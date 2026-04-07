import { useNavigate } from 'react-router-dom';

interface TagBadgeProps {
  label: string;
  value: string;
  count?: string;
  link?: string;
}

export const TagBadge: React.FC<TagBadgeProps> = ({ label, value, count = '35K', link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <a className='inline-flex h-7 cursor-pointer' onClick={handleClick}>
      <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl whitespace-nowrap text-white'>
        {value}
      </span>
      <span className='bg-[#333] px-2 py-1 flex items-center text-xs text-[#ccc] rounded-tr rounded-br whitespace-nowrap'>
        {count}
      </span>
    </a>
  );
};