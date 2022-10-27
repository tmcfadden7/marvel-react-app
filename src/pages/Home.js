import React from 'react';
import Slider from '../components/Slider';
import CharacterGrid from './characters/CharacterGrid';

const Home = ({ characters, isLoading, getName }) => {
	console.log('characters: ', characters);
	return (
		<>
			<section className='home-container'>
				<div className='random-char container mb-4 d-flex'>
					<div className='random-img'>IMG</div>
					<div className='random-desc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
						recusandae unde est vero incidunt eaque! Voluptate cumque similique
						blanditiis. Modi, iusto veniam consequuntur quaerat ullam veritatis
						nobis dolor corporis nemo!
					</div>
				</div>
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
				<CharacterGrid characters={characters} isLoading={isLoading} />
			</section>
		</>
	);
};

export default Home;
