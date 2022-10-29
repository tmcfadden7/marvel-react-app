import React from 'react';
import HomeCharacterGrid from '../components/Home/HomeCharacterGrid';
import RandomCharacter from '../components/RandomCharacter';
import Slider from '../components/Slider';

const Home = ({ characters, isLoading, getName }) => {
	console.log('characters: ', characters);
	return (
		<>
			<section className='home-container'>
				<RandomCharacter characters={characters} isLoading={isLoading} />
				{/* <Slider characters={characters} /> */}
				<HomeCharacterGrid characters={characters} isLoading={isLoading} />
			</section>
		</>
	);
};

export default Home;
