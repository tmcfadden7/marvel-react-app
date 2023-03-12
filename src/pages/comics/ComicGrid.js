import React, { useLayoutEffect } from 'react';
import Pagination from '../../components/Pagination';
import Comics from './Comics';
import MarvelBG from '../../assets/Marvel-Background.jpg';
import Search from '../../components/Search';

const ComicGrid = ({ comics, isLoading, getName }) => {
	// console.log('Works: ', comics);
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Search getName={getName} />
			<Pagination getName={getName} />
			<section
				className='comic-grid-container'
				style={{
					backgroundImage: `linear-gradient(45deg,rgba(230, 36, 41, 0.25), rgba(230, 36, 41, .25)), url(${MarvelBG})`,
				}}
			>
				<div className='container'>
					{isLoading ? (
						<h2>Loading...</h2>
					) : (
						<div className='row'>
							{comics.map((comic) => {
								return <Comics {...comic} />;
							})}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ComicGrid;
