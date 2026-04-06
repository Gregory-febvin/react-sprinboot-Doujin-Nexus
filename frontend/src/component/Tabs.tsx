import { Link } from 'react-router-dom';

const TAB_LINKS = [
  { to: '/random', label: 'Aléatoire' },
  { to: '/parodies', label: 'Séries' },
  { to: '/tags', label: 'Tags' },
  { to: '/characters', label: 'Personnages' },
  { to: '/artists', label: 'Artistes' },
  { to: '/groups', label: 'Groupes' },
  { to: '/info', label: 'Aide' },
];

export default function Tabs() {
  return (
    <div className="flex bg-neutral-700">
      <div className="flex ml-[20%] max-w-[65%]">
        {TAB_LINKS.map(({ to, label }) => (
          <div key={to} className="p-[15px]">
            <Link to={to}>{label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
