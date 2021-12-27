import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CharacterGrid from './characters/CharacterGrid'
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=a&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`);
      const data = await response.data.data.results;
      // console.log(data);
      setCharacters(data);
      setIsLoading(false);
    }
    fetchData();
  }, [])
  return (
    <div>
      <Header />
      <CharacterGrid characters={characters} isLoading={isLoading}/>
    </div>
  );
}

export default App;
