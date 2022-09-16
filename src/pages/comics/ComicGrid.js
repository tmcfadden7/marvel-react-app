import Pagination from '../../components/Pagination';
import Comics from './Comics';

const ComicGrid = ({ comics, isLoading, getName }) => {
	// console.log('Works: ', comics);
	return (
		<>
			<Pagination getName={getName} />
			<section className='comic-grid-container mt-4'>
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
