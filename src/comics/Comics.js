import logo from '../../src/marvel-comics.png';

const Comics = ({ title, thumbnail }) => {
	let noImg = thumbnail.path + '.jpg';
	noImg = !noImg.includes('image_not_available') ? noImg : logo;
	return (
		<>
			<div className='col-lg-4 col-md-6 col-12'>
				<div className='card'>
					<div className='char-name d-flex justify-content-center align-items-center py-5'>
						<h1 className='text-center'>{title}</h1>
					</div>
					<div className='card-img'>
						<img src={noImg} alt={title} className='img-fluid p-0' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Comics;
