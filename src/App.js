import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import { Data } from './data';
import SignUp from './components/SignUp';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Footer from './components/Footer';
import LogIn from './pages/LogIn';
import ProductDetailSection from './components/ProductDetailSection/index.js';
import CharacterSection from './components/Products/CharacterSection/index.js';
import ComicSection from './components/Products/ComicSection/index.js';
import './styles.scss';

function App() {
	const [characters, setCharacters] = useState([]);
	const [comics, setComics] = useState([]);
	const [isCharactersLoading, setIsCharactersLoading] = useState(false);
	const [isComicsLoading, setIsComicsLoading] = useState(false);
	const [characterName, setCharacterName] = useState('a');
	const [comicTitle, setComicTitle] = useState('a');
	const [fetchApi, setFetchApi] = useState(true);

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();
		const fetchCharacters = async () => {
			try {
				if (fetchApi && characterName) {
					setIsCharactersLoading(true);
					const response = await axios(
						`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`,
						{ signal: controller.signal }
					);
					const data = await response.data.data.results;
					const filterData = await data.filter(
						(char) =>
							char.description !== '' &&
							!char.thumbnail.path.includes('image_not_available')
					);
					if (isMounted) {
						setCharacters(filterData);
						setIsCharactersLoading(false);
					}
				} else {
					setCharacters(Data.characters);
					setIsCharactersLoading(false);
				}
			} catch (error) {
				console.log(error);
				setIsCharactersLoading(false);
			}
		};
		fetchCharacters();
		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [characterName, fetchApi]);

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();
		const fetchComics = async () => {
			try {
				if (fetchApi && comicTitle) {
					setIsComicsLoading(true);
					const response = await axios(
						`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${comicTitle}&limit=50&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`,
						{ signal: controller.signal }
					);
					const data = await response.data.data.results;
					const filterData = await data.filter(
						(char) =>
							char.description !== '' &&
							!char.thumbnail.path.includes('image_not_available')
					);
					if (isMounted) {
						setComics(filterData);
						setIsComicsLoading(false);
					}
				} else {
					setComics(Data.comics);
					setIsComicsLoading(false);
				}
			} catch (error) {
				console.log(error);
				setIsComicsLoading(false);
			}
		};
		fetchComics();
		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [comicTitle, fetchApi]);

	// TODO: IMPROVE LOADING STATES
	// if (isCharactersLoading) return <Spinner />;
	// if (isComicsLoading) return <Spinner />;

	// TODO: ADD NO RESULTS FOUND PAGE
	// if (!characters.length && !isCharactersLoading)
	// 	return <p>No Results found</p>;
	// if (!comics.length && !isComicsLoading) return <p>No Results found</p>;
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='/'
						element={
							<Home
								isCharLoading={isCharactersLoading}
								characters={characters}
								comics={comics}
								isComLoading={isComicsLoading}
								setCharacterName={setCharacterName}
								setComicTitle={setComicTitle}
							/>
						}
					/>
				</Route>
				<Route path='/profile' element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />} />
				</Route>
				<Route
					path='/characters'
					element={
						<CharacterSection
							characters={characters}
							productType={'characters'}
							isCharLoading={isCharactersLoading}
							setProduct={setCharacterName}
						/>
					}
				/>
				<Route
					path='/comics'
					element={
						<ComicSection
							comics={comics}
							productType={'comics'}
							isComLoading={isComicsLoading}
							setProduct={setComicTitle}
						/>
					}
				/>
				<Route path='/sign-up' element={<SignUp />} />
				<Route
					path='/login'
					element={<LogIn characters={characters} comics={comics} />}
				/>
				<Route
					path='/characters/:itemId'
					element={
						<ProductDetailSection
							product={characters}
							isLoading={isCharactersLoading}
						/>
					}
				/>
				<Route
					path='/comics/:itemId'
					element={<ProductDetailSection product={comics} />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
