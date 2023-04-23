import React from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
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
								<div className='container py-5'>
									<div className='comic-header-text px-sm-5 py-5 mx-auto text-white text-center rounded-5'>
										<div className='row'>
											<div className='col-12 col-md-6 mb-5 mb-md-0'>
												<h1 className='h2 mb-3'>
													{item.name ? item.name : item.title}
												</h1>
												<p>{item.description}</p>
												{item.creators && item.creators.items.length > 0 ? (
													<>
														<p>
															Creators:&nbsp;
															{item.creators.items.map((creator) => {
																return (
																	<>
																		{creator.name} - {creator.role},&nbsp;
																	</>
																);
															})}
														</p>
													</>
												) : (
													''
												)}
												<FavoriteStar favorite={item} />
											</div>
											<div className='col-12 col-md-6'>
												<Image
													thumbnail
													src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
												/>
											</div>
										</div>
									</div>
								</div>
							</section>
						</>
					);
				})}
		</>
	);
};

export default Details;
