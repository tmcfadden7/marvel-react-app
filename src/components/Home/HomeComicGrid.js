import React from 'react';
import MarvelBG from '../../assets/Marvel-Background.jpg';
import HomeComic from './HomeComic';

const HomeComicGrid = ({ comics, isLoading }) => {
	return (
		<section
			className='home-comic-grid-container'
			style={{
				backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
			}}
		>
			<div className='container mt-4 py-5'>
				{isLoading ? (
					<h2>Loading...</h2>
				) : (
					<div className='row justify-content-around'>
						{comics.map((comics) => {
							return <HomeComic key={comics.id} isLoading {...comics} />;
						})}
					</div>
				)}
			</div>
		</section>
	);
};

export default HomeComicGrid;