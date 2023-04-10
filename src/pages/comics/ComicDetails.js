import React from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import MarvelBG from '../../assets/Marvel-Background2.jpg';

const ComicDetails = ({ comics }) => {
	let { comicId } = useParams();

	const getComicDetails = comics.filter((comic) => {
		return Number(comic.id) === Number(comicId) ? comic : null;
	});
	const comicInfo = getComicDetails.map((comic) => {
		return comic;
	});

	return (
		<>
			{comicInfo &&
				comicInfo.map((comic, index) => {
					return (
						<>
							<section key={index} className='comic-details-container'>
								<div className='container'>
									<div className='row'>
										<div
											className='comic-header col-lg-10 position-relative m-auto'
											style={{
												backgroundImage: `url(${MarvelBG})`,
											}}
										>
											<div className='comic-header-text position-absolute px-2 px-sm-5 py-5 mx-auto text-white text-center rounded-5'>
												<h1 className='h2 mb-3'>{comic.title}</h1>
												{comic.description.length > 75 ? (
													<p>{comic.description.substring(0, 75) + '...'}</p>
												) : (
													<p>{comic.description}</p>
												)}
											</div>
										</div>
									</div>
									<div className='container mt-5'>
										<div className='row'>
											<div className='col-4'>
												<Image
													thumbnail
													src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
												/>
											</div>
											<div className='col-8 d-flex justify-content-center flex-column'>
												<p>{comic.description}</p>
												{comic.creators.items.length > 0 ? (
													<>
														<p>
															Creators:
															{comic.creators.items.map((creator) => {
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
									{comic.images && (
										<div className='container mt-5'>
											<div className='row'>
												{comic.images.map((img) => {
													if (img.path !== comic.thumbnail.path) {
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

export default ComicDetails;
