import React from 'react';
import Slider from '../components/Slider';
import CharacterGrid from './characters/CharacterGrid';

const Home = ({ characters, isLoading }) => {
	console.log('characters: ', characters);
	return (
		<>
			<section className='home-container'>
				<div className='container'>HOME</div>
				<Slider characters={characters} />
				<CharacterGrid characters={characters} isLoading={isLoading} />
			</section>
		</>
	);
};

export default Home;
