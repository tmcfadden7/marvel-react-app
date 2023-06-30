import React, { useMemo } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const RandomComic = ({ comics, isLoading }) => {
	const randomComicNum = useMemo(() => {
		return Math.floor(Math.random() * 7);
	}, []);
	return (
		<section className='random-char-container pt-0'>
			<Link
				to={`/comics/${comics[randomComicNum]?.id}`}
				className='text-decoration-none'
			>
				<div className='container mb-4 p-5 bg-black text-white'>
					<div className='row'>
						{isLoading || !comics ? (
							<Spinner />
						) : (
							<>
								<div className='col-md-4'>
									<div className='card'>
										<div className='card-img'>
											<img
												src={
													comics[randomComicNum]?.thumbnail?.path +
													'.' +
													comics[randomComicNum]?.thumbnail?.extension
												}
												alt={comics[randomComicNum]?.name}
												className='img-fluid p-0'
											/>
										</div>
									</div>
								</div>

								<div className='col d-flex flex-column justify-content-center mt-5 mt-md-0 text-white'>
									<h1 className='text-center'>
										{comics[randomComicNum]?.title}
									</h1>
									<p className='text-center mt-3'>
										{comics[randomComicNum]?.description}
									</p>
									{/* <div className='d-flex'>
							{comics[randomComicNum].comics.items.splice(0, 3).map((comic) => {
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

export default RandomComic;
