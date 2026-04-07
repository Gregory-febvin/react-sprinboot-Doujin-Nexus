import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (query.trim()) {
      // Implémentez la recherche selon vos besoins
      console.log('Recherche:', query);
    }
  };

  return (
    <div className="flex items-center w-full min-h-16 py-[5px] px-5 ml-[20%]">
      <img
        className="max-h-[48px] cursor-pointer hover:opacity-80 transition-opacity"
        src={logo}
        alt="Logo Doujin Nexus"
        onClick={() => navigate(`/`)}
      />
      <form className='flex items-center flex-1 ml-4 max-w-[30%]' onSubmit={handleSearch}>
        <input
          name="search"
          type="text"
          className="flex-auto p-[10px] border-none rounded-l-[5px] bg-[#34393F] text-white placeholder-gray-400 focus:outline-none focus:ring-0"
          placeholder="Recherche…"
        />
        <button className="p-[10px] border-none rounded-r-[5px] text-white bg-rose-600 cursor-pointer hover:bg-[#b01030] transition-colors" type="submit">
          <i className="fa fa-search fa-lg" />
        </button>
      </form>
    </div>
  );
}