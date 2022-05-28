import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Pagination from './components/Pagination';
import CharacterGrid from './characters/CharacterGrid';
import './styles.scss';

function App() {
	const [characters, setCharacters] = useState([]);
	const [comics, setComics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState('a');

	function getName(letter) {
		setName(letter);
		// console.log('click from getname', letter)
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(
				`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
			);
			const data = await response.data.data.results;
			const filterData = await data.filter((char) => char.description !== '');
			// console.log(filterData);
			setCharacters(filterData);
			setIsLoading(false);
		};
		fetchData();
	}, [name]);

	useEffect(() => {
		const fetchComics = async () => {
			const response = await axios(
				`http://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=381b1b1d55431234af33e3c11953547e&hash=1dcf741e1f53611062f293df3dfd240c`
			);
			const data = await response.data.data.results;
			setComics(data);
			setIsLoading(false);
		};
		fetchComics();
		console.log('COMICS: ', comics);
	}, [comics]);

	if (!characters) return;
	if (!comics) return;
	return (
		<div>
			<Router>
				<Header getName={getName} />
				<Pagination getName={getName} />
				<CharacterGrid characters={characters} isLoading={isLoading} />
				<Routes>
					<Route
						path='/characters'
						element={
							<CharacterGrid characters={characters} isLoading={isLoading} />
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
