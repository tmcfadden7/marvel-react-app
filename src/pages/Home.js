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
				{/* <div className='container'>
					<form className='d-flex'>
						<input
							className='form-control m-5 border border-dark border-3'
							type='search'
							placeholder='Search Character'
							onKeyUp={(e) => {
								e.target.value ? getName(e.target.value) : getName('a');
							}}
						/>
					</form>
				</div> */}
				{/* <Slider characters={characters} /> */}
				<HomeCharacterGrid characters={characters} isLoading={isLoading} />
			</section>
		</>
	);
};

export default Home;
