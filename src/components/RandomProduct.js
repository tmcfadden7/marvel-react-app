import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SectionHeader from './SectionHeader';
import logo from '../assets/marvel.jpg';

const RandomProduct = ({ product, productType, isLoading }) => {
	const randomProduct = useMemo(() => {
		return Math.floor(Math.random() * product.length);
	}, [product.length]);

	const noImg = useMemo(() => {
		if (product.length) {
			if (
				product[randomProduct]?.thumbnail &&
				product[randomProduct]?.thumbnail?.path?.includes('image_not_available')
			) {
				return logo;
			} else {
				const img = product[randomProduct]?.thumbnail?.path;
				const imgExt = product[randomProduct]?.thumbnail?.extension;
				let thumbnail = img.includes('.jpg')
					? img
					: img.includes('.png')
					? img
					: img + '.' + imgExt;
				thumbnail = !thumbnail.includes('image_not_available')
					? thumbnail
					: logo;
				return thumbnail;
			}
		}
	}, [product, randomProduct]);

	// const img = product[randomProduct]?.thumbnail?.path;
	// const imgExt = product[randomProduct]?.thumbnail?.extension;
	// let noImg = img.includes('.jpg')
	// 	? img
	// 	: img.includes('.png')
	// 	? img
	// 	: img + '.' + imgExt;
	// noImg = !noImg.includes('image_not_available') ? noImg : logo;

	return (
		<section className='random-char-container pt-0 mt-5'>
			{!isLoading && product.length === 0 ? (
				<>
					<SectionHeader title={productType.toUpperCase()} />
					<div className='random-product-error container mt-0'>
						<h1 className='text-center'>{`Please try searching for different ${productType}`}</h1>
					</div>
				</>
			) : (
				<>
					<div className='container'>
						<SectionHeader title={productType.toUpperCase()} />
					</div>
					<Link
						to={`/${productType}/${product[randomProduct]?.id}`}
						className='text-decoration-none'
					>
						<div className='random-product-card-container container my-0 px-5 pt-5 pb-0 bg-black'>
							<div className='row'>
								<div className='col-md-4'>
									{isLoading ? (
										<div className='w-100'>
											<Skeleton height={'350px'} />
										</div>
									) : (
										<div className='card'>
											<div className='card-img'>
												<img
													src={noImg}
													// src={
													// 	product[randomProduct]?.thumbnail?.path +
													// 	'.' +
													// 	product[randomProduct]?.thumbnail?.extension
													// }
													alt={
														product[randomProduct]?.name ||
														product[randomProduct]?.title
													}
													className='img-fluid p-0'
												/>
											</div>
										</div>
									)}
								</div>

								<div className='col d-flex flex-column justify-content-center mt-5 mt-md-0 text-white'>
									{isLoading ? (
										<>
											<div className='text-center mb-4'>
												<Skeleton width={'200px'} height={'40px'} />
											</div>
											<Skeleton count={5} />
										</>
									) : (
										<>
											<h1 className='text-center'>
												{product[randomProduct]?.name ||
													product[randomProduct]?.title}
											</h1>
											<p className='text-center mt-3'>
												{product[randomProduct]?.description}
											</p>
										</>
									)}
								</div>
							</div>
							<p className='fs-6 text text-center pt-5 pb-2'>
								Data provided by Marvel. © 2014 Marvel
							</p>
						</div>
					</Link>
				</>
			)}
		</section>
	);
};

export default RandomProduct;
