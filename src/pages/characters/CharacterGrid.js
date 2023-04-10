import React, { useLayoutEffect } from 'react';
import Pagination from '../../components/Pagination';
import Characters from './Characters';
import MarvelBG from '../../assets/Marvel-Background.jpg';
import Search from '../../components/Search';

const CharacterGrid = ({ characters, isLoading, getName }) => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Search getName={getName} />
			<Pagination getName={getName} />
			<section
				className='char-grid-container'
				style={{
					backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
				}}
			>
				<div className='container mt-4 py-5'>
					{isLoading ? (
						<h2>Loading...</h2>
					) : (
						<div className='row justify-content-around'>
							{characters.map((character) => {
								return (
									<Characters key={character.id} isLoading {...character} />
								);
							})}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default CharacterGrid;
