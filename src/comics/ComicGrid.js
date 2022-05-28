import Comics from './Comics';

const ComicGrid = ({ comics, isLoading }) => {
	console.log('Works: ', comics);
	return (
		<>
			<section className='comics-container mt-4'>
				<div className='container'>
					{isLoading ? (
						<h2>Loading...</h2>
					) : (
						<div className='row'>
							{comics.map((comic) => {
								return <Comics {...comic} />;
							})}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ComicGrid;
