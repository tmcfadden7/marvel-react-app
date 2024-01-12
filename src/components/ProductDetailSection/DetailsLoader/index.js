import Skeleton from 'react-loading-skeleton';
const DetailsLoader = () => {
	return (
		<>
			<div className='row'>
				<div className='col-12 col-md-6 mb-4 mb-md-0'>
					<Skeleton
						count={1}
						containerClassName='d-block px-2 pt-4 w-75 mx-auto'
					/>
					<Skeleton
						containerClassName='px-2 pt-4 d-flex flex-column'
						count={6}
					/>
				</div>
				<div className='col-12 col-md-6'>
					<Skeleton height={'600px'} />
				</div>
			</div>
		</>
	);
};

export default DetailsLoader;
