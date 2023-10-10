import React from 'react';
import HomeCharacterGrid from '../components/Home/HomeCharacterGrid';
import HomeComicGrid from '../components/Home/HomeComicGrid';
import RandomCharacter from '../components/RandomCharacter';

const Home = ({ characters, comics, isLoading, getName }) => {
	console.log('characters: ', characters);
	return (
		<>
			<section className='home-container'>
				<RandomCharacter characters={characters} isLoading={isLoading} />
				<HomeCharacterGrid characters={characters} isLoading={isLoading} />
				<HomeComicGrid comics={comics} isLoading={isLoading} />
			</section>
		</>
	);
};

export default Home;
