import Header from './Header';
import Tabs from './Tabs';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Tabs />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}