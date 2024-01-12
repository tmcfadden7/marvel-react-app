import Skeleton from 'react-loading-skeleton';
const CardLoader = () => {
	return (
		<div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4'>
			<div className='card'>
				<Skeleton
					containerClassName='px-2 py-5 product-title d-flex flex-column justify-content-center'
					count={2}
				/>
				<Skeleton
					height={'250px'}
					containerClassName='d-block d-md-flex flex-row'
				/>
			</div>
		</div>
	);
};

export default CardLoader;
