import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import CharacterGrid from './characters/CharacterGrid';
import './styles.scss';
import ComicGrid from './comics/ComicGrid';

function App() {
	const [characters, setCharacters] = useState([]);
	const [comics, setComics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [charName, setCharName] = useState('a');
	const [comicName, setComicName] = useState('a');

	function getCharName(letter) {
		setCharName(letter);
	}
	function getComicName(letter) {
		setComicName(letter);
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(
				`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${charName}&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
			);
			const data = await response.data.data.results;
			const filterData = await data.filter((char) => char.description !== '');
			setCharacters(filterData);
			setIsLoading(false);
		};
		fetchData();
	}, [charName]);

	useEffect(() => {
		const fetchComics = async () => {
			const response = await axios(
				`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${comicName}&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
			);
			const data = await response.data.data.results;
			const filterData = data.filter((comic) => comic.description);
			setComics(filterData);
			setIsLoading(false);
		};
		fetchComics();
		// console.log('COMICS: ', comics);
	}, [comicName]);

	if (!characters) return;
	if (!comics) return;
	return (
		<Router>
			<Header getName={getCharName} characters={characters} />
			<Routes>
				<Route
					path='/characters'
					element={
						<CharacterGrid
							characters={characters}
							isLoading={isLoading}
							getName={getCharName}
						/>
					}
				/>
				<Route
					path='/comics'
					element={
						<ComicGrid
							comics={comics}
							isLoading={isLoading}
							getName={getComicName}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
