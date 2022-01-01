import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Pagination from './components/Pagination';
import CharacterGrid from './characters/CharacterGrid'
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('a');

  function getName(letter) {
    setName(letter)
    // console.log('click from getname', letter)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`);
      const data = await response.data.data.results;
      // console.log(data);
      setCharacters(data);
      setIsLoading(false);
    }
    fetchData();
  }, [name])
  return (
    <div>
      <Header getName={getName}/>
      <Pagination getName={getName}/>
      <CharacterGrid characters={characters} isLoading={isLoading}/>
    </div>
  );
}

export default App;
