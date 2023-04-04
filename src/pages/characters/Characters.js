import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/marvel-logo.jpg';

const Characters = ({ name, thumbnail, isLoading, id }) => {
	let noImg = thumbnail.path.includes('.jpg')
		? thumbnail.path
		: thumbnail.path + '.' + thumbnail.extension;
	noImg = !noImg.includes('image_not_available') ? noImg : logo;
	return (
		<>
			<div className='col-sm-12 col-md-6 col-lg-4 mb-4'>
				<Link to={`/characters/${id}`} className='text-decoration-none'>
					<div className='card'>
						<div className='char-name d-flex justify-content-center align-items-center py-5'>
							<h1 className='text-center'>{name}</h1>
						</div>
						<div className='card-img'>
							<img src={noImg} alt={name} className='img-fluid p-0' />
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Characters;
