import React from 'react';
import logo from '../../assets/marvel-logo.jpg';
import { Link } from 'react-router-dom';

const HomeComic = ({ id, title, thumbnail, isLoading }) => {
	let noImg = thumbnail?.path.includes('.jpg')
		? thumbnail?.path
		: thumbnail?.path + '.' + thumbnail?.extension;
	noImg = !noImg.includes('image_not_available') ? noImg : logo;
	return (
		<>
			<div className='col-sm-6 col-md-6 col-lg-3 mb-4'>
				<Link to={`/comics/${id}`} className='text-decoration-none'>
					<div className='card'>
						<div className='comic-title d-flex justify-content-center align-items-center py-5'>
							<h1 className='text-center h1'>{title}</h1>
						</div>
						<div className='card-img'>
							<img src={noImg} alt={title} className='img-fluid p-0' />
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default HomeComic;
