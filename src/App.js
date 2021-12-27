import { useEffect, useState } from 'react';
import Header from './Header';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
