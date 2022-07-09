import React from 'react';
import logo from '../../src/marvel-comics.png';

const FavCharacter = ({ favCharacters, favComics }) => {
	console.log('MY FAV3: ', favCharacters);
	let noImg = favComics.map((fav) => fav.thumbnail.path + '.jpg');
	// let noImg = favComics.thumbnail.path + '.jpg';
	console.log('IMAGE: ', noImg);
	noImg = !noImg.includes('image_not_available') ? noImg : logo;
	return (
		<section className='fav-character-container py-5'>
			<div className='container py-5'>
				<div className='row'>
					{favCharacters.map((fav) => {
						return (
							<>
								<div className='col'>
									{/* <div className='char-name'>
										<h1>{fav.name}</h1>
									</div> */}
									<div className='char-name'>{fav.description}</div>
								</div>
							</>
						);
					})}
				</div>
				<div className='row'>
					{favComics.map((fav) => {
						return (
							<div className='col-sm-3'>
								<div className='card'>
									<div className='char-name'>{fav.title}</div>
									<div className='card-img'>
										<img
											src={fav.thumbnail.path + '.jpg'}
											alt={fav.title}
											className='img-fluid p-0'
										/>
									</div>
									<div className='char-name'>{fav.description}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FavCharacter;
