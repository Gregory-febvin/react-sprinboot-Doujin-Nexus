import { Routes, Route } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

import Layout from './component/Layout';
import Home from './page/Home';
import Sauce from './page/Sauce';
import ImageFrame from './component/ImageFrame';
import SearchResults from './component/SearchResults';
//import Browsing from './component/Browsing';

import TagsList from './component/header/TagsList';
import ArtistsList from './component/header/ArtistList';
import ParodiesList from './component/header/ParodiesList';

import { ROUTES } from './route/route'

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SAUCE} element={<Sauce />} />
        <Route path={ROUTES.SAUCE_THUMBNAIL} element={<ImageFrame />} />

        {/* Liste des catégories */}
        <Route path="/tags" element={<TagsList />} />
        <Route path="/artists" element={<ArtistsList />} />
        <Route path="/parodies" element={<ParodiesList />} />
        
        {/* Résultats de recherche avec URL clean */}
        <Route path="/tags/:query" element={<SearchResults type="tags" />} />
        <Route path="/artists/:query" element={<SearchResults type="artists" />} />
        <Route path="/parodies/:query" element={<SearchResults type="parodies" />} />
      </Route>
    </Routes>
  );
}

export default App;
