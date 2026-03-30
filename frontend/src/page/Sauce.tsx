// Sauce.jsx
import { Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Infos from '../component/Infos';
import Thumbnail from '../component/Thumbnails';

export default function Sauce() {
  const { id } = useParams();
  const [sauce, setSauce] = useState(null);

  useEffect(() => {
    axios(`http://127.0.0.1:8080/api/manga/${id}`)
      .then(res => setSauce(res.data))
      .catch(err => console.error('Erreur:', err));
  }, [id]);

  return (
  <div className='sauce'>
    <Infos sauce={sauce} />
    {/* <Thumbnail sauce={sauce}/> */}
  </div>
  );
}

