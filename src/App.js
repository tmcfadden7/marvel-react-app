import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import CharacterGrid from './pages/characters/CharacterGrid';
import './styles.scss';
import ComicGrid from './pages/comics/ComicGrid';
import Home from './pages/Home';
import { Data } from './data';
import SignUp from './components/SignUp';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Layout from './components/Layout';

function App() {
	const [characters, setCharacters] = useState([]);
	const [comics, setComics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [charName, setCharName] = useState('a');
	const [comicName, setComicName] = useState('a');
	const [fetchApi, setFetchApi] = useState(true);

	function getCharName(letter) {
		setCharName(letter);
	}
	function getComicName(letter) {
		setComicName(letter);
	}

	useEffect(() => {
		let isMounted = true;
		const fetchCharacters = async () => {
			const isCharNameSet =
				charName !== '' ? `?nameStartsWith=${charName}&` : '?';
			try {
				if (fetchApi) {
					const response = await axios(
						`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${charName}&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
					);
					const data = await response.data.data.results;
					const filterData = await data.filter(
						(char) =>
							char.description !== '' &&
							!char.thumbnail.path.includes('image_not_available')
					);
					if (isMounted) {
						setCharacters(filterData);
						setIsLoading(false);
					}
				} else {
					setCharacters(Data.characters);
					setIsLoading(false);
				}
			} catch (error) {
				console.log(error);
				setCharacters(Data.characters);
				setIsLoading(false);
			}
			// console.log('characters: ', characters);
		};
		fetchCharacters();
		return () => {
			isMounted = false;
		};
	}, [charName, fetchApi]);

	useEffect(() => {
		const fetchComics = async () => {
			try {
				if (fetchApi) {
					const response = await axios(
						`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${comicName}&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
					);
					const data = await response.data.data.results;
					const filterData = data.filter((comic) => comic.description);
					setComics(filterData);
					setIsLoading(false);
				} else {
					// use placeholder data
				}
			} catch (error) {
				console.log('COMICS', error);
				setCharacters(Data.comics);
				setIsLoading(false);
			}
		};
		fetchComics();
		// console.log('COMICS: ', comics);
	}, [comicName, fetchApi]);

	if (!characters) return;
	if (!comics) return;
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='/'
						element={
							<Home
								characters={characters}
								isLoading={isLoading}
								getName={getCharName}
							/>
						}
					/>
					<Route path='/profile' element={<PrivateRoute />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
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
				</Route>
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;
