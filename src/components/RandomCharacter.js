import React, { useMemo } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const RandomCharacter = ({ characters, isLoading }) => {
	console.log('randCHAR: ', characters);
	// const randomChar = 2;
	const randomChar = useMemo(() => {
		return Math.floor(Math.random() * 7);
	}, []);
	console.log('RANDOM: ', randomChar);
	return (
		<section className='random-char-container pt-0'>
			<Link
				to={`/characters/${characters[randomChar]?.id}`}
				className='text-decoration-none'
			>
				<div className='container mb-4 p-5 bg-black text-white'>
					<div className='row'>
						{isLoading || !characters ? (
							<Spinner />
						) : (
							<>
								<div className='col-md-4'>
									<div className='card'>
										<div className='card-img'>
											<img
												src={
													characters[randomChar]?.thumbnail?.path +
													'.' +
													characters[randomChar]?.thumbnail?.extension
												}
												alt={characters[randomChar]?.name}
												className='img-fluid p-0'
											/>
										</div>
									</div>
								</div>

								<div className='col d-flex flex-column justify-content-center mt-5 mt-md-0 text-white'>
									<h1 className='text-center'>
										{characters[randomChar]?.name}
									</h1>
									<p className='text-center mt-3'>
										{characters[randomChar]?.description}
									</p>
									{/* <div className='d-flex'>
							{characters[randomChar].comics.items.splice(0, 3).map((comic) => {
								return <p>{comic.name}</p>;
							})}
						</div> */}
								</div>
							</>
						)}
					</div>
				</div>
			</Link>
		</section>
	);
};

export default RandomCharacter;
