import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
					<>
						<div className='row justify-content-around'>
							{comics.slice(0, 10).map((comics) => {
								return <HomeComic key={comics.id} isLoading {...comics} />;
							})}
						</div>
						<div className='d-flex justify-content-center'>
							<Link to='/comics'>
								<Button
									variant='light'
									className='fs-4 text rounded-pill p-3 border border-3 border-dark'
								>
									See more comics
								</Button>
							</Link>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default HomeComicGrid;
