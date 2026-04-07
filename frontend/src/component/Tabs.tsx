import { useNavigate } from 'react-router-dom';

const TAB_ITEMS = [
  { label: 'Aléatoire', path: '/random' },
  { label: 'Séries', path: '/parodies' },
  { label: 'Tags', path: '/tags' },
  { label: 'Artistes', path: '/artists' },
  { label: 'Aide', path: '/info' },
];

export default function Tabs() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-neutral-700">
      <div className="flex ml-[20%] max-w-[65%]">
        {TAB_ITEMS.map(tab => (
          <div
            key={tab.path}
            className="p-[15px] cursor-pointer text-white hover:bg-neutral-600 transition-colors"
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}