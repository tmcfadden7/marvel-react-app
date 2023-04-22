import React from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import MarvelBG from '../assets/Marvel-Background2.jpg';
import FavoriteStar from './FavoriteStar';

const Details = ({ items }) => {
	let { itemId } = useParams();

	console.log('IDD:', itemId);

	const getItemDetails = items.filter((item) => {
		return Number(item.id) === Number(itemId) ? item : null;
	});
	const itemInfo = getItemDetails.map((item) => {
		return item;
	});

	return (
		<>
			{itemInfo &&
				itemInfo.map((item, index) => {
					return (
						<>
							<section key={item.id} className='comic-details-container'>
								<div className='container'>
									<div className='d-flex '>
										<FavoriteStar favorite={item} />
									</div>
									<div className='row'>
										<div
											className='comic-header col-lg-10 position-relative m-auto'
											style={{
												backgroundImage: `url(${MarvelBG})`,
											}}
										>
											<div className='comic-header-text position-absolute px-2 px-sm-5 py-5 mx-auto text-white text-center rounded-5'>
												<h1 className='h2 mb-3'>{item.title}</h1>
												{item.description.length > 75 ? (
													<p>{item.description.substring(0, 75) + '...'}</p>
												) : (
													<p>{item.description}</p>
												)}
											</div>
										</div>
									</div>
									<div className='container mt-5'>
										<div className='row'>
											<div className='col-4'>
												<Image
													thumbnail
													src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
												/>
											</div>
											<div className='col-8 d-flex justify-content-center flex-column'>
												<p>{item.description}</p>
												{item.creators && item.creators.items.length > 0 ? (
													<>
														<p>
															Creators:
															{item.creators.items.map((creator) => {
																return (
																	<>
																		{creator.name}-{creator.role},
																	</>
																);
															})}
														</p>
													</>
												) : (
													<p>Creators not listed.</p>
												)}
											</div>
										</div>
									</div>
									{item.images && (
										<div className='container mt-5'>
											<div className='row'>
												{item.images.map((img) => {
													if (img.path !== item.thumbnail.path) {
														return (
															<div className='col-4'>
																<Image
																	thumbnail
																	src={`${img.path}.${img.extension}`}
																/>
															</div>
														);
													}
												})}
											</div>
										</div>
									)}
								</div>
							</section>
						</>
					);
				})}
		</>
	);
};

export default Details;
