import React from 'react';
import HomeCharacterGrid from '../components/Home/HomeCharacterGrid';
import HomeComicGrid from '../components/Home/HomeComicGrid';
import RandomCharacter from '../components/RandomCharacter';
// import Slider from '../components/Slider';

const Home = ({ characters, comics, isLoading, getName }) => {
	console.log('characters: ', characters);
	return (
		<>
			<section className='home-container'>
				<RandomCharacter characters={characters} isLoading={isLoading} />
				{/* <Slider characters={characters} /> */}
				<HomeCharacterGrid characters={characters} isLoading={isLoading} />
				<HomeComicGrid comics={comics} isLoading={isLoading} />
			</section>
		</>
	);
};

export default Home;
