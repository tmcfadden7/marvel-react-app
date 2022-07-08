import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import CharacterGrid from './characters/CharacterGrid';
import './styles.scss';
import ComicGrid from './comics/ComicGrid';
import FavCharacter from './components/FavCharacter';

function App() {
	const [characters, setCharacters] = useState([]);
	const [comics, setComics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [charName, setCharName] = useState('a');
	const [comicName, setComicName] = useState('a');
	const [favCharacters, setFavCharacters] = useState([]);

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
			// console.log('characters: ', characters);
		};
		fetchData();
	}, [charName]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(
				`http://gateway.marvel.com/v1/public/characters?nameStartsWith=t&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
			);
			const data = await response.data.data.results;
			let myFavCharacters = [];
			const thorData = await data.filter(
				(char) => char.description !== '' && char.name.toLowerCase() === 'thor'
			);
			const thanosData = await data.filter(
				(char) =>
					char.description !== '' && char.name.toLowerCase() === 'thanos'
			);
			// const tonyData = await data.filter(
			// 	(char) =>
			// 		char.description !== '' && char.name.toLowerCase() === 'the gaurdians'
			// );
			myFavCharacters.push(thorData);
			myFavCharacters.push(thanosData);
			setFavCharacters(myFavCharacters);
			setIsLoading(false);
			// console.log('MY FAV: ', favCharacters);
		};
		fetchData();
	}, []);

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
	if (!favCharacters) return;
	if (!comics) return;

	const showcaseChar = characters.filter((char, i) => i === 0);
	return (
		<Router>
			<Header
				getName={getCharName}
				characters={showcaseChar}
				favCharacters={favCharacters}
			/>
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
			<FavCharacter favCharacters={favCharacters} />
		</Router>
	);
}

export default App;
