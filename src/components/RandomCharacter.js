import Spinner from './Spinner';

const RandomCharacter = ({ characters, isLoading }) => {
	console.log('randCHAR: ', characters);
	const randomChar = 2;
	return (
		<section className='random-char-container pt-0'>
			<div className='container mb-4 bg-black text-white'>
				<div className='row'>
					{isLoading || !characters ? (
						<Spinner />
					) : (
						<>
							<div className='col-4'>
								<div className='card'>
									<div className='card-img'>
										<img
											src={
												characters[randomChar].thumbnail.path +
												'.' +
												characters[randomChar].thumbnail.extension
											}
											alt={characters[randomChar].name}
											className='img-fluid p-0'
										/>
									</div>
								</div>
							</div>

							<div className='col d-flex flex-column justify-content-center'>
								<h1 className='text-center'>{characters[randomChar].name}</h1>
								<p>{characters[randomChar].description}</p>
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
		</section>
	);
};

export default RandomCharacter;
