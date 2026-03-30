import { Routes, Route } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

import Layout from './component/Layout';
import Home from './page/Home';
import Sauce from './page/Sauce';
//import ImageFrame from './components/ImageFrame';
//import Browsing from './components/Browsing';

import { ROUTES } from './route/route'

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SAUCE} element={<Sauce />} />
        {/* <Route path={ROUTES.SAUCE_THUMBNAIL} element={<ImageFrame />} />
        <Route path={ROUTES.SAUCE_NAME} element={<Browsing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
