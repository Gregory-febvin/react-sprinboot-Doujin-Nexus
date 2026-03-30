// Header.jsx
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
//import glass from '../assets/glass.svg';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center w-full min-h-16 py-[5px] px-5 ml-[20%]">
      <img className="max-h-[48px]" src={logo} alt="Logo Doujin Nexus" style={{ cursor: 'pointer' }} onClick={() => navigate(`/`)}/>
      <form className='flex items-center flex-1 ml-4 max-w-[30%]' onSubmit={(e) => e.preventDefault()}>
        <input type="text" className="flex-auto p-[10px] border-none rounded-l-[5px] bg-[#34393F] text-white placeholder-gray-400 focus:outline-none focus:ring-0" placeholder="Recherche…" />
        <button className="p-[10px] border-none rounded-r-[5px] text-white bg-rose-600 cursor-pointer hover:bg-[#b01030]" type="submit">
          <i className="fa fa-search fa-lg" />
        </button>
      </form>
    </div>
  );
}

